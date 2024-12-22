import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [react()],
	define: {
		"process.env.NODE_ENV": JSON.stringify("production"),
	},
	build: {
		sourcemap: false,
		lib: {
			entry: path.resolve(__dirname, "src/widget-entry.js"),
			name: "ChatbotWidget",
			formats: ["iife"],
			fileName: () => "chatbot.min.js",
		},
		rollupOptions: {
			external: [],
			output: {
				name: "ChatbotWidget",
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	mode: "production",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	// Add this to ensure proper handling of externals in development
	optimizeDeps: {
		exclude: ["react", "react-dom"],
	},
});
