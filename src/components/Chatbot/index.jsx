import { useState, useEffect, useRef } from "react";
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
		<div className='fixed bottom-4 right-4 z-[1000]'>
			{" "}
			<button
				onClick={handleToggleChat}
				className={`${
					isOpen ? "hidden" : "flex"
				} items-center justify-center w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-200 fixed bottom-4 right-4`}
			>
				<MessageSquareIcon className='w-6 h-6' />
			</button>
			{/* Chat window */}
			<div
				className={`${
					isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
				} origin-bottom-right transition-all duration-200 w-[400px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col`}
			>
				{/* Header */}
				<div className='bg-purple-600 p-4 rounded-t-lg flex items-center justify-between'>
					<div className='flex items-center gap-2'>
						<div className='h-7 w-7 flex items-center justify-center rounded-full bg-white'>
							<BotIcon className='w-5 h-5 text-purple-600' />
						</div>
						<h2 className='text-white text-lg font-semibold'>Chatbot</h2>
					</div>
					<div className='flex items-center gap-2'>
						<button
							onClick={handleEndChat}
							className='text-white hover:text-red-200 transition-colors'
							title='End Chat'
						>
							<PowerIcon className='w-6 h-6' />
						</button>
						<button
							onClick={() => setIsOpen(false)}
							className='text-white hover:text-purple-200 transition-colors'
						>
							<XIcon className='w-6 h-6' />
						</button>
					</div>
				</div>

				{/* Messages area */}
				<div
					ref={chatboxRef}
					className='flex-1 overflow-y-auto p-4 space-y-4'
				>
					{messages.map((msg, idx) => (
						<ChatMessage
							key={idx}
							message={msg.content}
							type={msg.role === "user" ? "user" : "assistant"}
						/>
					))}
					{isTyping && <TypingIndicator />}
				</div>

				{/* Input area */}
				<form
					onSubmit={handleSubmit}
					className='p-4 border-t'
				>
					<div className='flex gap-2'>
						<textarea
							value={inputMessage}
							onChange={(e) => setInputMessage(e.target.value)}
							onKeyDown={handleKeyDown}
							placeholder='Type a message...'
							className='flex-1 resize-none p-2 border rounded-lg focus:outline-none focus:border-purple-600 max-h-32'
							rows='1'
						/>
						<button
							type='submit'
							disabled={!wsConnected}
							className='p-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors'
							onClick={handleSubmit}
						>
							<SendIcon className='w-5 h-5' />
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
