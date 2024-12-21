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
			// Load dependencies with proper ESM CDN URLs
			const React = await import(
				"https://esm.sh/stable/react@18.2.0/es2022/react.js"
			);
			const ReactDOM = await import(
				"https://esm.sh/stable/react-dom@18.2.0/es2022/react-dom.js"
			);
			const lucide = await import(
				"https://esm.sh/stable/lucide-react@0.263.1/es2022/lucide-react.js"
			);
			const { FaRobot } = await import(
				"https://esm.sh/stable/react-icons@4.11.0/fa6/index.js"
			);

			const { MessageSquare, Send, X, Power } = lucide;

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
