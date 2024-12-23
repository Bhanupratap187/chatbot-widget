import React from "react";
import PropTypes from "prop-types";
import { BotIcon } from "./SvgIcons";
import useTypewriter from "../../hooks/useTypewriter";

const ChatMessage = ({ message, type }) => {
	const { displayedText, containerRef } = useTypewriter(
		type === "assistant" ? message : ""
	);

	const isUser = type === "user";

	return (
		<div
			ref={containerRef}
			className={`cb-flex ${
				isUser ? "cb-flex-row-reverse" : "cb-flex-row"
			} cb-items-end cb-gap-2 cb-mb-4`}
		>
			{type === "assistant" && (
				<div className='cb-h-8 cb-w-8 cb-flex cb-items-center cb-justify-center cb-rounded-full cb-bg-[#BE3CEB] cb-flex-shrink-0'>
					<BotIcon className='cb-w-5 cb-h-5 cb-text-white' />
				</div>
			)}
			<div
				className={`cb-max-w-[80%] cb-p-3 cb-rounded-lg ${
					isUser
						? "cb-bg-[#BE3CEB] cb-text-white cb-rounded-br-none cb-ml-auto"
						: "cb-bg-gray-100 cb-text-gray-800 cb-rounded-bl-none cb-mr-auto"
				} cb-font-semibold cb-text-sm`}
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
