import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { PipeCatProvider, usePipeCat } from "./PipeCatProvider";
import { useRTVIClientEvent } from "@pipecat-ai/client-react";
import { RTVIEvent } from "@pipecat-ai/client-js";
import { ChatWebSocket } from "../../lib/websocket";
import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";
import favicon from "../../assets/images/favicon-dark.png";
import {
	MessageSquareIcon,
	SendIcon,
	XIcon,
	PowerIcon,
	BotIcon,
	MicIcon,
	LoadingSpinner,
} from "./SvgIcons";
import ConnectingIndicator from "./ConnectingIndicator";

const ChatWindow = ({ apiKey, isOpen, onStateChange, setIsOpen }) => {
	const [messages, setMessages] = useState([]);
	const [inputMessage, setInputMessage] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [sessionEnded, setSessionEnded] = useState(false);

	const client = usePipeCat();

	const [wsConnected, setWsConnected] = useState(false);
	const [manuallyEnded, setManuallyEnded] = useState(false);
	const [isReady, setIsReady] = useState(false);
	const chatboxRef = useRef(null);
	const wsRef = useRef(null);
	const [micState, setMicState] = useState("idle");
	const [showCloseModal, setShowCloseModal] = useState(false);

	useEffect(() => {
		wsRef.current = new ChatWebSocket(apiKey, {
			onConnect: () => setWsConnected(true),
			onDisconnect: () => setWsConnected(false),
			onTyping: () => setIsTyping(true),
			onMessage: (message) => {
				setIsTyping(false);
				setMessages((prev) => [
					...prev,
					{ role: "assistant", content: message },
				]);
			},
			onLocalMessage: (message) => {
				setMessages((prev) => [...prev, { role: "user", content: message }]);
			},
			onReady: () => {
				setIsReady(true);
			},
			onSessionEnd: () => {
				setSessionEnded(true);
			},
		});

		return () => wsRef.current?.disconnect();
	}, [apiKey]);

	useEffect(() => {
		if (isOpen && !wsConnected) {
			wsRef.current.manuallyEnded = false;
			wsRef.current.connect();
		}
	}, [isOpen, wsConnected]);

	useEffect(() => {
		if (chatboxRef.current) {
			chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
		}
	}, [messages, isTyping]);

	useEffect(() => {
		if (onStateChange) {
			onStateChange(isOpen);
		}
	}, [isOpen, onStateChange]);

	useEffect(() => {
		const handler = (data) => {
			if (data && typeof data.final === "boolean" && data.final === true) {
				wsRef.current.sendMessage(data.text);
			} else {
				console.log("Non-final transcription or invalid data:", data);
			}
		};

		// Register the handler
		client.on(RTVIEvent.UserTranscript, handler);

		// Cleanup
		return () => {
			client.off(RTVIEvent.UserTranscript, handler);
		};
	}, [client]); // Depend on client

	// Handle typing indicator
	useRTVIClientEvent(RTVIEvent.BotTyping, () => {
		setIsTyping(true);
	});

	// Handle session end
	useRTVIClientEvent(RTVIEvent.SessionEnd, () => {
		setSessionEnded(true);
	});

	const handleTextMessageSubmit = (e) => {
		e.preventDefault();
		if (!inputMessage.trim() || !wsConnected || !isReady) return;

		try {
			wsRef.current.sendMessage(inputMessage);
			setInputMessage("");
		} catch (error) {
			console.error("Failed to send message:", error);
		}
	};

	const handleVoiceMessageSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();

		// If already connected, disconnect
		if (micState === "connected") {
			try {
				await client.disconnect();
				setMicState("idle");
			} catch (error) {
				console.error("Failed to disconnect voice chat:", error);
			}
			return;
		}

		// If not connected, try to connect
		try {
			setMicState("connecting");
			await client.connect();
			setMicState("connected");
		} catch (error) {
			console.error("Failed to initialize voice chat:", error);
			setMicState("idle");
		}
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleTextMessageSubmit(e);
		}
	};

	const handleEndChat = async () => {
		setIsOpen(false);
		if (onStateChange) {
			onStateChange(false);
		}
		await client.disconnect();
		wsRef.current.disconnect(true);
		setMessages([]);
		setWsConnected(false);
		setManuallyEnded(true);
		setSessionEnded(true);
	};

	const handleCloseConfirm = async () => {
		setShowCloseModal(false);
		setIsOpen(false);
		if (onStateChange) {
			onStateChange(false);
		}
		await client.disconnect();
		wsRef.current.disconnect(false);
		setMessages([]);
	};

	const handleCloseCancel = () => {
		setShowCloseModal(false);
	};

	const handleCloseChat = async () => {
		// If mic is connected, disconnect it
		if (micState === "connected") {
			try {
				await client.disconnect();
				setMicState("idle");
			} catch (error) {
				console.error("Failed to disconnect voice chat:", error);
			}
		}
		setShowCloseModal(true);
	};

	const handleRestartChat = async () => {
		setMessages([]);
		setSessionEnded(false);
		await client.disconnect();
		wsRef.current.connect();
	};

	return (
		<div
			className={`cb-chat-window cb-fixed cb-bottom-4 cb-right-[4.5rem] cb-origin-bottom-left cb-transition-all cb-duration-200 cb-w-[400px] cb-h-[600px] cb-bg-gray-50 cb-rounded-lg cb-shadow-xl cb-flex cb-flex-col ${
				isOpen
					? "cb-scale-100 cb-opacity-100 cb-translate-y-0"
					: "cb-scale-95 cb-opacity-0 cb-translate-y-4"
			}`}
		>
			{/* Show mic ConnectingIndicator */}
			{micState === "connecting" && <ConnectingIndicator />}

			{/* Close confirmation modal */}
			{showCloseModal && (
				<div className='cb-modal-backdrop'>
					<div className='cb-modal-content'>
						<p className='cb-session-ended-text'>
							Closing the chat will end your conversation and delete all chat
							history. Are you sure you want to continue?
						</p>
						<div className='cb-session-ended-buttons'>
							<button
								onClick={handleCloseConfirm}
								className='cb-session-button cb-start-again'
							>
								Confirm
							</button>
							<button
								onClick={handleCloseCancel}
								className='cb-session-button cb-cancel'
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Session ended modal */}
			{sessionEnded && (
				<div className='cb-modal-backdrop'>
					<div className='cb-modal-content'>
						<p className='cb-session-ended-text'>
							The last session is over. Please start over if you require further
							help.
						</p>
						<div className='cb-session-ended-buttons'>
							<button
								onClick={handleRestartChat}
								className='cb-session-button cb-start-again'
							>
								Start Again
							</button>
							<button
								onClick={handleEndChat}
								className='cb-session-button cb-cancel'
							>
								Cancel
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Header */}
			<div className='cb-bg-[#BE3CEB] cb-p-4 cb-rounded-t-lg cb-flex cb-items-center cb-justify-between cb-z-50'>
				<div className='cb-flex cb-items-center cb-gap-2'>
					<div className='cb-h-7 cb-w-7 cb-flex cb-items-center cb-justify-center cb-rounded-full cb-bg-white'>
						<BotIcon
							className='cb-w-5 cb-h-5 cb-text-[#BE3CEB] cb-cursor-pointer'
							onWhiteBackground={true}
						/>
					</div>
					<h2 className='cb-text-white cb-flex cb-items-center cb-justify-center cb-text-lg cb-font-semibold'>
						Quibble Support
						{wsConnected && isReady && (
							<span className='cb-inline-block cb-w-2 cb-h-2 cb-rounded-full cb-bg-green-400 cb-ml-2' />
						)}
					</h2>
				</div>
				<div className='cb-flex cb-items-center cb-gap-2'>
					<button
						onClick={handleEndChat}
						className='cb-text-white hover:cb-text-red-200 cb-transition-colors cb-cursor-pointer'
						title='End Chat'
					>
						<PowerIcon className='cb-w-6 cb-h-6 cb-cursor-pointer' />
					</button>
					<button
						onClick={handleCloseChat}
						className='cb-text-white hover:cb-text-purple-200 cb-transition-colors cb-cursor-pointer'
						title='Close Chat'
					>
						<XIcon className='cb-w-6 cb-h-6 cb-cursor-pointer' />
					</button>
				</div>
			</div>

			{/* Messages area */}
			<div
				ref={chatboxRef}
				className='cb-flex-1 cb-overflow-y-auto cb-p-4 cb-space-y-4 cb-bg-gray-50 cb-chat-messages cb-z-50 cb-relative'
			>
				{messages.map((msg, idx) => (
					<ChatMessage
						key={idx}
						message={msg.content}
						type={msg.role === "user" ? "user" : "assistant"}
					/>
				))}
				{isTyping && (
					<div className='cb-flex cb-items-center cb-gap-2'>
						<div className='cb-h-8 cb-w-8 cb-flex cb-items-center cb-justify-center cb-rounded-full cb-bg-[#BE3CEB]'>
							<BotIcon className='cb-w-5 cb-h-5 cb-text-white' />
						</div>
						<TypingIndicator />
					</div>
				)}
			</div>

			{/* Input area */}
			<div className='cb-bg-white cb-p-4 cb-shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] cb-z-20'>
				<div className='cb-flex cb-gap-2 cb-w-full'>
					<button
						type='button'
						onClick={handleVoiceMessageSubmit}
						className={`cb-p-2 cb-text-white cb-rounded-lg cb-transition-colors ${
							micState === "connected"
								? "cb-bg-red-500 hover:cb-bg-red-600"
								: "cb-bg-[#BE3CEB] hover:cb-bg-[#ac2adb]"
						} disabled:cb-bg-gray-400 disabled:cb-cursor-not-allowed relative`}
						disabled={micState === "connecting"}
					>
						{micState === "connecting" ? (
							<div className='cb-animate-spin cb-h-5 cb-w-5'>
								<LoadingSpinner />
							</div>
						) : (
							<div className='cb-relative'>
								<MicIcon className='cb-w-5 cb-h-5' />
								{micState === "connected" && (
									<span className='cb-absolute cb-top-0 cb-right-0 cb-h-2 cb-w-2'>
										<span className='cb-animate-ping cb-absolute cb-inline-flex cb-h-full cb-w-full cb-rounded-full cb-bg-red-400 cb-opacity-75'></span>
										<span className='cb-relative cb-inline-flex cb-rounded-full cb-h-2 cb-w-2 cb-bg-red-500'></span>
									</span>
								)}
							</div>
						)}
					</button>

					<form
						onSubmit={handleTextMessageSubmit}
						className='cb-flex-1'
					>
						<div className='cb-flex cb-gap-2'>
							<textarea
								value={inputMessage}
								onChange={(e) => setInputMessage(e.target.value)}
								onKeyDown={handleKeyDown}
								placeholder='Type a message...'
								className='cb-flex-1 cb-resize-none cb-p-2 cb-border cb-rounded-lg cb-border-gray-300 focus:cb-outline-none focus:cb-border-[#BE3CEB] focus:cb-ring-1 focus:cb-ring-[#BE3CEB] cb-bg-white cb-max-h-32 cb-font-normal'
								rows='1'
							/>
							<button
								type='submit'
								disabled={!wsConnected}
								className='cb-p-2 cb-text-white cb-bg-[#BE3CEB] cb-rounded-lg hover:cb-bg-[#ac2adb] disabled:cb-bg-gray-400 disabled:cb-cursor-not-allowed cb-transition-colors'
							>
								<SendIcon className='cb-w-5 cb-h-5' />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

const Chatbot = ({ onStateChange, apiKey }) => {
	const [isOpen, setIsOpen] = useState(false);
	// const [messages, setMessage] = useState([]);

	const handleToggleChat = () => {
		const newState = !isOpen;
		setIsOpen(newState);
		if (onStateChange) {
			onStateChange(newState);
		}
	};

	return (
		<div className='cb-fixed cb-inset-0 cb-pointer-events-none'>
			<div className='cb-fixed cb-bottom-4 cb-right-4 cb-pointer-events-auto'>
				{/* Toggle button */}
				<button
					onClick={handleToggleChat}
					className={`cb-items-center cb-justify-center cb-w-14 cb-h-14 cb-cursor-pointer cb-bg-[#ECFFE6] cb-duration-200 cb-rounded-full cb-shadow-[0_0_15px_5px_rgba(255,245,228,0.6)] ${
						isOpen ? "cb-opacity-0" : "cb-flex cb-opacity-100"
					}`}
				>
					<img
						src={favicon || "/favicon-dark.png"}
						alt='quibbleAI'
						className='cb-w-8 cb-h-8 cb-cursor-pointer'
					/>
				</button>

				{/* Chat window */}
				{isOpen && (
					<PipeCatProvider>
						<ChatWindow
							apiKey={apiKey}
							isOpen={isOpen}
							onStateChange={onStateChange}
							setIsOpen={setIsOpen}
							// messages={messages}
							// setMessages={setMessage}
						/>
					</PipeCatProvider>
				)}
			</div>
		</div>
	);
};

Chatbot.propTypes = {
	apiKey: PropTypes.string.isRequired,
	onStateChange: PropTypes.func,
};

export default Chatbot;
