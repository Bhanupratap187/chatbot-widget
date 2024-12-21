import PropTypes from "prop-types";
import { BotIcon } from "lucide-react";
import useTypewriter from "../../hooks/useTypewriter";

const ChatMessage = ({ message, type }) => {
	const { displayedText, containerRef } = useTypewriter(
		type === "assistant" ? message : ""
	);

	return (
		<div
			ref={containerRef}
			className={`flex ${
				type === "user" ? "justify-end" : "justify-start"
			} items-end gap-2`}
		>
			{type === "assistant" && (
				<div className='h-8 w-8 flex items-center justify-center rounded-full bg-purple-600'>
					<BotIcon className='w-5 h-5 text-white' />
				</div>
			)}
			<div
				className={`max-w-[80%] p-3 rounded-lg ${
					type === "user"
						? "bg-purple-600 text-white rounded-br-none font-semibold text-sm"
						: "bg-gray-100 text-gray-800 rounded-bl-none font-semibold text-sm"
				}`}
			>
				{type === "assistant" ? displayedText : message}
			</div>
		</div>
	);
};

ChatMessage.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default ChatMessage;
