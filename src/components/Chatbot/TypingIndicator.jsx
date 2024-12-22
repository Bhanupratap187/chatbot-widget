import React from "react";

const TypingIndicator = () => (
	<div className='flex gap-2 py-3 px-2 max-w-[80%] bg-gray-100 rounded-lg rounded-bl-none w-24'>
		<div className='w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]'></div>
		<div className='w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]'></div>
		<div className='w-2 h-2 rounded-full bg-gray-500 animate-bounce'></div>
	</div>
);

export default TypingIndicator;
