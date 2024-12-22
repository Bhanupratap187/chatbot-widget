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
		className='cb-w-6 cb-h-6 cb-text-current'
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
