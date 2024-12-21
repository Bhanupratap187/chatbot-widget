import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/components/Chatbot/index.jsx"),
			name: "Chatbot",
			formats: ["es", "umd"],
			fileName: (format) => `chatbot.${format}.js`,
		},
		rollupOptions: {
			// external: ["react", "react-dom", "lucide-react"],
			external: [],
			output: {
				// globals: {
				// 	react: "React",
				// 	"react-dom": "ReactDOM",
				// 	"lucide-react": "lucide",
				// },
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
});
