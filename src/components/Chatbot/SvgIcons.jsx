import React from "react";

// Helper function to create base64 SVG URLs
const createSvgUrl = (paths, color = "white") => {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;
	return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const MessageSquareIcon = () => (
	<img
		src={createSvgUrl(
			'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />',
			"white"
		)}
		alt='Message'
		className='cb-w-6 cb-h-6'
	/>
);

export const SendIcon = () => (
	<img
		src={createSvgUrl(
			'<path d="m22 2-7 20-4-9-9-4Z" /><path d="M22 2 11 13" />'
		)}
		alt='Send'
		className='cb-w-5 cb-h-5 cb-text-current'
	/>
);

export const XIcon = () => (
	<img
		src={createSvgUrl('<path d="M18 6 6 18" /><path d="m6 6 12 12" />')}
		alt='Close'
		className='cb-w-6 cb-h-6 cb-text-current'
	/>
);

export const PowerIcon = () => (
	<img
		src={createSvgUrl(
			'<path d="M18.36 6.64A9 9 0 0 1 20.77 15" /><path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" /><path d="M12 2v4" />'
		)}
		alt='Power'
		className='cb-w-6 cb-h-6 cb-text-current'
	/>
);

export const BotIcon = ({ onWhiteBackground = false }) => (
	<img
		src={createSvgUrl(
			'<path d="M12 8V4H8" /><rect width="16" height="12" x="4" y="8" rx="2" /><path d="M2 14h2" /><path d="M20 14h2" /><path d="M15 13v2" /><path d="M9 13v2" />',
			onWhiteBackground ? "#6B46C1" : "white"
		)}
		alt='Bot'
		className='cb-w-6 cb-h-6'
	/>
);

export const MicIcon = () => (
	<img
		src={createSvgUrl(
			'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/>'
		)}
		alt='Microphone'
		className='cb-w-5 cb-h-5 cb-text-current'
	/>
);

export const LoadingSpinner = () => (
	<img
		src={createSvgUrl(
			'<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" opacity="0.25"/><path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" opacity="0.75"/>'
		)}
		alt='Loading'
		className='cb-w-5 cb-h-5 cb-text-current'
	/>
);
