import React from "react";

const TypingIndicator = () => (
	<div className='cb-flex cb-gap-2 cb-py-3 cb-px-2 cb-max-w-[80%] cb-bg-gray-100 cb-rounded-lg cb-rounded-bl-none cb-w-24'>
		<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-gray-500 cb-animate-bounce [animation-delay:-0.3s]'></div>
		<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-gray-500 cb-animate-bounce [animation-delay:-0.15s]'></div>
		<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-gray-500 cb-animate-bounce'></div>
	</div>
);

export default TypingIndicator;
