import "./styles/chatbot.css";
import Chatbot from "./components/Chatbot";
import React from "react";
import { createRoot } from "react-dom/client";

// Export the initialization function
function init(apiKey) {
	// Create container
	const container = document.createElement("div");
	container.id = "chatbot-container";
	document.body.appendChild(container);

	// Create root and render
	const root = createRoot(container);
	root.render(
		React.createElement(
			React.StrictMode,
			null,
			React.createElement(Chatbot, { apiKey })
		)
	);
}

// Expose the init function globally
window.ChatbotWidget = {
	init,
};

export { init };
