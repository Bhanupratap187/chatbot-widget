// Create a function to find our script tag
function findScriptTag() {
	const scripts = document.getElementsByTagName("script");
	for (const script of scripts) {
		if (
			script.src.includes("chatbot-widget") ||
			script.src.includes("install.js")
		) {
			return script;
		}
	}
	return null;
}

// Load Tailwind CSS
const tailwindLink = document.createElement("link");
tailwindLink.href = "https://cdn.tailwindcss.com";
tailwindLink.rel = "stylesheet";
document.head.appendChild(tailwindLink);

// Get API key from script tag
const scriptTag = findScriptTag();
if (!scriptTag) {
	console.error(
		"Chatbot Error: Could not find script tag. Make sure the script filename contains 'install.js' or 'chatbot-widget'"
	);
	throw new Error("Could not find script tag");
}

const apiKey = scriptTag.getAttribute("data-api-key");
if (!apiKey) {
	console.error("Chatbot Error: API key is required");
	throw new Error("API key is");
}

// Initialize chatbot
async function initChatbot() {
	try {
		// First load React and ReactDOM
		const [{ default: React }, { default: ReactDOM }] = await Promise.all([
			import("https://unpkg.com/react@18.2.0/umd/react.production.min.js"),
			import(
				"https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js"
			),
		]);

		// Add React to window object for Lucide
		window.React = React;

		// Now load Lucide after React is available globally
		// const { default: lucide } = await import(
		// 	"https://cdn.jsdelivr.net/npm/lucide-react@0.469.0/dist/cjs/lucide-react.min.js"
		// );

		// Use the ESM build of lucide-react
		const { default: lucide } = await import(
			"https://cdn.jsdelivr.net/npm/lucide-react@0.469.0/dist/esm/lucide-react.min.js"
		);


		const { MessageSquare, Send, X, Power, BotIcon } = lucide;

		// Load chatbot component with full URL to the ES module
		const { default: Chatbot } = await import(
			"https://cdn.jsdelivr.net/gh/Bhanupratap187/chatbot-widget@main/dist/chatbot.es.js"
		);

		const container = document.createElement("div");
		document.body.appendChild(container);

		const root = ReactDOM.createRoot(container);
		root.render(
			React.createElement(
				React.StrictMode,
				null,
				React.createElement(Chatbot, {
					apiKey,
					icons: { MessageSquare, Send, X, Power, BotIcon },
				})
			)
		);
	} catch (error) {
		console.error("Error loading chatbot:", error);
		console.error("Error details:", {
			message: error.message,
			stack: error.stack,
			name: error.name,
		});
	}
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initChatbot);
} else {
	initChatbot();
}
