import { useState, useEffect, useRef, React } from "react";
import PropTypes from "prop-types";
import { ChatWebSocket } from "../../lib/websocket";
import ChatMessage from "./ChatMessage";
import {
	MessageSquareIcon,
	SendIcon,
	XIcon,
	PowerIcon,
	BotIcon,
} from "./SvgIcons";
import TypingIndicator from "./TypingIndicator";

const Chatbot = ({ apiKey }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [messages, setMessages] = useState([]);
	const [inputMessage, setInputMessage] = useState("");
	const [isTyping, setIsTyping] = useState(false);
	const [wsConnected, setWsConnected] = useState(false);
	// eslint-disable-next-line no-unused-vars
	const [manuallyEnded, setManuallyEnded] = useState(false);
	const chatboxRef = useRef(null);
	const wsRef = useRef(null);

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
		});

		return () => wsRef.current?.disconnect();
	}, [apiKey]);

	// Add effect to handle connection based on isOpen state
	useEffect(() => {
		if (isOpen && !wsConnected) {
			wsRef.current.manuallyEnded = false; // Reset manual flag
			wsRef.current.connect();
		}
	}, [isOpen, wsConnected]);

	useEffect(() => {
		if (chatboxRef.current) {
			chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
		}
	}, [messages, isTyping]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputMessage.trim() || !wsConnected) return;

		try {
			wsRef.current.sendMessage(inputMessage);
			setInputMessage("");
		} catch (error) {
			console.error("Failed to send message:", error);
		}
	};

	Chatbot.propTypes = {
		apiKey: PropTypes.string.isRequired,
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			handleSubmit(e);
		}
	};

	const handleToggleChat = () => {
		if (!isOpen) {
			setManuallyEnded(false); // Reset manual flag when opening
		}
		setIsOpen(!isOpen);
	};

	const handleEndChat = () => {
		setIsOpen(false);
		wsRef.current.disconnect(true);
		setMessages([]);
		setWsConnected(false);
		setManuallyEnded(true);
	};

	return (
		<div className='cb-fixed cb-bottom-4 cb-right-4 cb-z-[1000]'>
			<button
				onClick={handleToggleChat}
				className={`${
					isOpen ? "cb-hidden" : "cb-flex"
				} cb-items-center cb-justify-center cb-w-14 cb-h-14 cb-rounded-full cb-bg-purple-600 hover:cb-bg-purple-700 cb-text-white cb-shadow-lg cb-transition-all cb-duration-200 cb-fixed cb-bottom-4 cb-right-4`}
			>
				<MessageSquareIcon className='cb-w-6 cb-h-6' />
			</button>
			{/* Chat window */}
			<div
				className={`${
					isOpen ? "cb-scale-100 cb-opacity-100" : "cb-scale-0 cb-opacity-0"
				} cb-origin-bottom-right cb-transition-all cb-duration-200 cb-w-[400px] cb-h-[600px] cb-bg-white cb-rounded-lg cb-shadow-xl cb-flex cb-flex-col`}
			>
				{/* Header */}
				<div className='cb-bg-purple-600 cb-p-4 cb-rounded-t-lg cb-flex cb-items-center cb-justify-between'>
					<div className='cb-flex cb-items-center cb-gap-2'>
						<div className='cb-h-7 cb-w-7 cb-flex cb-items-center cb-justify-center cb-rounded-full cb-bg-white'>
							<BotIcon
								className='cb-w-5 cb-h-5 cb-text-purple-600'
								onWhiteBackground={true}
							/>
						</div>
						<h2 className='cb-text-white cb-text-lg cb-font-semibold'>
							Chatbot
						</h2>
					</div>
					<div className='cb-flex cb-items-center cb-gap-2'>
						<button
							onClick={handleEndChat}
							className='cb-text-white hover:cb-text-red-200 cb-transition-colors'
							title='End Chat'
						>
							<PowerIcon className='cb-w-6 cb-h-6' />
						</button>
						<button
							onClick={() => setIsOpen(false)}
							className='cb-text-white hover:cb-text-purple-200 cb-transition-colors'
						>
							<XIcon className='cb-w-6 cb-h-6' />
						</button>
					</div>
				</div>

				{/* Messages area */}
				<div
					ref={chatboxRef}
					className='cb-flex-1 cb-overflow-y-auto cb-p-4 cb-space-y-4'
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
							<div className='cb-h-8 cb-w-8 cb-flex cb-items-center cb-justify-center cb-rounded-full cb-bg-purple-600'>
								<BotIcon className='cb-w-5 cb-h-5 cb-text-white' />
							</div>
							<TypingIndicator />
						</div>
					)}
				</div>

				{/* Input area */}
				<form
					onSubmit={handleSubmit}
					className='cb-p-4 cb-border-t'
				>
					<div className='cb-flex cb-gap-2'>
						<textarea
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)}
							onKeyDown={handleKeyDown}
							placeholder='Type a message...'
							className='cb-flex-1 cb-resize-none cb-p-2 cb-border cb-rounded-lg focus:cb-outline-none focus:cb-border-purple-600 cb-max-h-32'
							rows='1'
						/>
						<button
							type='submit'
							disabled={!wsConnected}
							className='cb-p-2 cb-text-white cb-bg-purple-600 cb-rounded-lg hover:cb-bg-purple-700 disabled:cb-bg-gray-400 disabled:cb-cursor-not-allowed cb-transition-colors'
							onClick={handleSubmit}
						>
							<SendIcon className='cb-w-5 cb-h-5' />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
Chatbot.propTypes = {
	apiKey: PropTypes.string.isRequired,
};

export default Chatbot;
