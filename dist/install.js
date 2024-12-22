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

// Load dependencies and make them globally available
async function loadDependencies() {
	try {
		// Import React and ReactDOM using URL imports
		const [reactModule, reactDomModule, jsxRuntime] = await Promise.all([
			import("https://esm.sh/react@18.2.0"),
			import("https://esm.sh/react-dom@18.2.0/client"),
			import("https://esm.sh/react@18.2.0/jsx-runtime"),
		]);

		// Make them globally available
		window.React = reactModule.default;
		window.ReactDOM = reactDomModule.default;
		window.jsxRuntime = jsxRuntime;

		return {
			React: reactModule.default,
			ReactDOM: reactDomModule.default,
			jsxRuntime,
		};
	} catch (error) {
		console.error("Error loading dependencies:", error);
		throw error;
	}
}

// Initialize chatbot
async function initChatbot() {
	try {
		// First load React and ReactDOM
		const { React, ReactDOM } = await loadDependencies();

		// Load the chatbot component
		const { default: Chatbot } = await import(
			"https://cdn.jsdelivr.net/gh/Bhanupratap187/chatbot-widget@v1.2.2/dist/chatbot.es.js"
		);

		// Create container
		const container = document.createElement("div");
		container.id = "chatbot-container";
		document.body.appendChild(container);

		// Create root and render
		const root = ReactDOM.createRoot(container);
		root.render(
			React.createElement(
				React.StrictMode,
				null,
				React.createElement(Chatbot, { apiKey })
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

// Get API key from script tag
const scriptTag = findScriptTag();
if (!scriptTag) {
	console.error("Chatbot Error: Could not find script tag");
	throw new Error("Could not find script tag");
}

const apiKey = scriptTag.getAttribute("data-api-key");
if (!apiKey) {
	console.error("Chatbot Error: API key is required");
	throw new Error("API key is required");
}

// Initialize when DOM is ready
if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", initChatbot);
} else {
	initChatbot();
}
