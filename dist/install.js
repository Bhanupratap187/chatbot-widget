(function () {
	// Load Tailwind CSS
	const tailwindLink = document.createElement("link");
	tailwindLink.href = "https://cdn.tailwindcss.com";
	tailwindLink.rel = "stylesheet";
	document.head.appendChild(tailwindLink);

	// Get API key from script tag
	const scriptTag = document.currentScript;
	const apiKey = scriptTag.getAttribute("data-api-key");

	if (!apiKey) {
		console.error("Chatbot Error: API key is required");
		return;
	}

	// Initialize chatbot
	async function initChatbot() {
		try {
			// Load dependencies
			const React = await import("https://esm.sh/react@18");
			const ReactDOM = await import("https://esm.sh/react-dom@18");
			const { MessageSquare, Send, X, Power } = await import(
				"https://esm.sh/lucide-react@0.263.1"
			);
			const { FaRobot } = await import("https://esm.sh/react-icons/fa6");

			// Load chatbot component
			const { default: Chatbot } = await import(
				"https://cdn.jsdelivr.net/gh/Bhanupratap187/chatbot-widget@main/dist/chatbot.es.js"
			);

			const container = document.createElement("div");
			document.body.appendChild(container);

			// Create root and render
			const root = ReactDOM.createRoot(container);
			root.render(
				React.createElement(
					React.StrictMode,
					null,
					React.createElement(Chatbot, {
						apiKey: apiKey,
						icons: { MessageSquare, Send, X, Power, FaRobot },
					})
				)
			);
		} catch (error) {
			console.error("Error loading chatbot:", error);
		}
	}

	// Initialize when DOM is ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initChatbot);
	} else {
		initChatbot();
	}
})();
