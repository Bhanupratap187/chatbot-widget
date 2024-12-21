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
			// Load dependencies with versioned ESM CDN URLs
			const [
				{ default: React },
				{ default: ReactDOM },
				{ MessageSquare, Send, X, Power },
				{ FaRobot },
			] = await Promise.all([
				import("https://esm.run/react@18.2.0"),
				import("https://esm.run/react-dom@18.2.0"),
				import("https://esm.run/lucide-react@0.263.1"),
				import("https://esm.run/react-icons@4.11.0/fa6"),
			]);

			// Load chatbot component with full URL to the ES module
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
						apiKey,
						icons: { MessageSquare, Send, X, Power, FaRobot },
					})
				)
			);
		} catch (error) {
			console.error("Error loading chatbot:", error);
			// Add more detailed error logging
			console.error("Error details:", {
				message: error.message,
				stack: error.stack,
			});
		}
	}

	// Initialize when DOM is ready
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", initChatbot);
	} else {
		initChatbot();
	}
})();
