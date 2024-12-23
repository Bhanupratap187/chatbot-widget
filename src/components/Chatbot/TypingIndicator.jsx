const TypingIndicator = () => (
	<div className='cb-flex cb-items-center cb-bg-gray-100 cb-py-3 cb-px-4 cb-rounded-lg cb-w-fit'>
		<div className='cb-flex cb-items-center cb-gap-2'>
			<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-gray-500 cb-animate-bounce'></div>
			<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-gray-500 cb-animate-bounce [animation-delay:-0.15s]'></div>
			<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-gray-500 cb-animate-bounce [animation-delay:-0.3s]'></div>
		</div>
	</div>
);

export default TypingIndicator;
