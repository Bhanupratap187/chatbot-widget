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
			formats: ["es"],
			fileName: (format) => `chatbot.${format}.js`,
		},
		rollupOptions: {
			external: [
				"react",
				"react-dom",
				/^react\/.*/,
				/^react-dom\/.*/,
				/^@\/.*/, // Handle aliased imports
			],
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
				// Ensure proper path resolution for aliased imports
				paths: {
					"@/*": "./src/*",
				},
				// Preserve modules to help with tree-shaking
				preserveModules: false,
				// Add exports condition to help with module resolution
				exports: "named",
			},
		},
	},
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
