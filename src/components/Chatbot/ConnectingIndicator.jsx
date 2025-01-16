import favicon from "../../assets/images/favicon-dark.png";

const ConnectingIndicator = () => (
	<div className='cb-absolute cb-inset-0 cb-flex cb-items-center cb-justify-center cb-z-[100]'>
		<div className='cb-absolute cb-inset-0 cb-bg-white/50 cb-backdrop-blur-sm' />
		<div className='cb-flex cb-flex-col cb-items-center cb-gap-4 cb-z-10'>
			<img
				src={favicon || "/favicon-dark.png"}
				alt='quibbleAI'
				className='cb-w-12 cb-h-12'
			/>
			<div className='cb-flex cb-flex-col cb-items-center cb-gap-2'>
				<span className='cb-text-gray-700 cb-font-medium'>Connecting</span>
				<div className='cb-flex cb-items-center cb-gap-1'>
					<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-[#BE3CEB] cb-animate-bounce'></div>
					<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-[#BE3CEB] cb-animate-bounce [animation-delay:-0.15s]'></div>
					<div className='cb-w-2 cb-h-2 cb-rounded-full cb-bg-[#BE3CEB] cb-animate-bounce [animation-delay:-0.3s]'></div>
				</div>
			</div>
		</div>
	</div>
);

export default ConnectingIndicator;
