// import { StrictMode } from "react";
import { StrictMode } from "https://esm.sh/react@18.2.0";
import { createRoot } from "react-dom/client";
import "./styles/chatbot.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
