import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
	plugins: [react()],
	define: {
		"process.env.NODE_ENV": JSON.stringify("production"),
	},
	build: {
		minify: true,
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
				assetFileNames: (assetInfo) => {
					if (assetInfo.name === "style.css") {
						return "chatbot.min.css";
					}
					return `assets/${assetInfo.name}`;
				},
				inlineDynamicImports: false,
			},
		},
		cssCodeSplit: false,
		cssMinify: true,
	},
	mode: "production",
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
	optimizeDeps: {
		exclude: ["react", "react-dom"],
	},
	css: {
		modules: {
			scopeBehaviour: "local",
			localsConvention: "camelCase",
			generateScopedName: "[hash:base64:8]",
		},
		postcss: {
			plugins: [
				tailwindcss,
				autoprefixer({
					grid: true,
					flexbox: true,
				}),
			],
		},
		preprocessorOptions: {
			less: {
				javascriptEnabled: true,
				modifyVars: {
					"root-entry-name": "default",
				},
			},
		},
	},
});
