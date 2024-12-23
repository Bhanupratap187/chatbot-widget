import React from "react";
import PropTypes from "prop-types";
import { BotIcon } from "./SvgIcons";
import useTypewriter from "../../hooks/useTypewriter";

const ChatMessage = ({ message, type }) => {
	const { displayedText, containerRef } = useTypewriter(
		type === "assistant" ? message : ""
	);

	return (
		<div
			ref={containerRef}
			className={`cb-flex ${
				type === "user" ? "cb-justify-end" : "cb-justify-start"
			} cb-items-end cb-gap-2`}
		>
			{type === "assistant" && (
				<div className='cb-h-8 cb-w-8 cb-flex cb-items-center cb-justify-center cb-rounded-full cb-bg-purple-600'>
					<BotIcon className='cb-w-5 cb-h-5 cb-text-white' />
				</div>
			)}
			<div
				className={`cb-max-w-[80%] cb-p-3 cb-rounded-lg ${
					type === "user"
						? "cb-bg-purple-600 cb-text-white cb-rounded-br-none cb-font-semibold cb-text-sm"
						: "cb-bg-gray-100 cb-text-gray-800 cb-rounded-bl-none cb-font-semibold cb-text-sm"
				} cb-w-full`}
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
