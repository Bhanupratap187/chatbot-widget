export class ChatWebSocket {
	constructor(apiKey, handlers) {
		this.apiKey = apiKey;
		this.handlers = handlers;
		this.ws = null;
		this.reconnectAttempts = 0;
		this.maxReconnectAttempts = 3;
		this.baseReconnectDelay = 1000;
		this.isConnecting = false;
		this.inactivityTimeout = null;
		this.manuallyEnded = false;
		// this.connect();
		this.resetInactivityTimer();
	}

	connect() {
		if (this.isConnecting) return;
		this.manuallyEnded = false;
		console.log("Connecting to WebSocket...");

		this.ws = new WebSocket(
			`wss://stage-chatbox.quibbleai.io:3333/ws?apiKey=${this.apiKey}`
		);

		this.ws.onopen = () => {
			console.log("WebSocket connected");
			this.isConnecting = false;
			this.reconnectAttempts = 0;
			this.handlers.onConnect?.();
		};

		this.ws.onmessage = (event) => {
			try {
				const data = JSON.parse(event.data);

				switch (data.event) {
					case "ready":
						console.log("Ready event received");
						this.handlers.onReady?.();
						break;

					case "typing":
						console.log("Typing event received");
						this.handlers.onTyping?.(data.data.status);
						break;

					case "assistant_message":
						console.log("Assistant message received");
						this.handlers.onMessage?.(data.data.assistant_text);
						break;

					default:
						console.warn("Unknown event received:", data.event);
				}
			} catch (error) {
				console.error("Message parsing error:", error);
				this.handlers.onError?.(error);
			}
		};

		this.ws.onclose = () => {
			console.log("WebSocket closed");
			this.isConnecting = false;
			this.handleReconnect();
		};

		this.ws.onerror = (error) => {
			console.error("WebSocket error:", error);
			this.handlers.onError?.(error);
		};
	}

	resetInactivityTimer() {
		if (this.inactivityTimeout) {
			clearTimeout(this.inactivityTimeout);
		}
		// Send keepAlive event after 1 minute of inactivity
		this.inactivityTimeout = setTimeout(() => {
			const keepAlivePayload = {
				event: "keepAlive",
			};
			console.log("Sending keepAlive event");
			this.ws.send(JSON.stringify(keepAlivePayload));
		}, 50000);

		// Close connection after 10 minutes of inactivity
		this.inactivityTimeout = setTimeout(() => {
			console.log("Connection closed due to inactivity");
			this.handlers.onSessionEnd?.();
			this.disconnect();
		}, 600000);
	}

	sendMessage(message) {
		this.resetInactivityTimer();
		if (this.ws?.readyState === WebSocket.OPEN) {
			const messagePayload = {
				event: "user_message",
				data: {
					user_text: message,
				},
			};
			console.log("Sending message:", messagePayload);
			this.ws.send(JSON.stringify(messagePayload));
			// Call onLocalMessage handler immediately after sending
			this.handlers.onLocalMessage?.(message);
		} else {
			throw new Error("WebSocket is not connected");
		}
	}

	handleReconnect() {
		if (this.manuallyEnded) {
			console.log("Manual disconnect - skipping reconnect");
			return;
		}
		if (this.reconnectAttempts >= this.maxReconnectAttempts) {
			this.handlers.onError?.(new Error("Max reconnection attempts reached"));
			return;
		}

		const delay = this.baseReconnectDelay * Math.pow(2, this.reconnectAttempts);
		this.reconnectAttempts++;
		console.log(
			`Attempting to reconnect in ${delay}ms (attempt ${this.reconnectAttempts})`
		);
		setTimeout(() => this.connect(), delay);
	}

	disconnect(manual = false) {
		if (manual) {
			this.manuallyEnded = true;
		}
		if (this.inactivityTimeout) {
			clearTimeout(this.inactivityTimeout);
		}
		if (this.ws) {
			console.log("Disconnecting WebSocket");
			this.ws.close();
			this.ws = null;
		}
	}
}
