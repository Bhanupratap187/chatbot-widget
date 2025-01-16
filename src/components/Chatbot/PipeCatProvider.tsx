// PipeCatProvider.tsx
import React, { createContext, useContext, useRef } from "react";
import { RTVIClient } from "@pipecat-ai/client-js";
import { DailyTransport } from "@pipecat-ai/daily-transport";

// Define the type for the context
type PipeCatContextType = RTVIClient | null;

// Create the context with a default value of `null`
const PipeCatContext = createContext<PipeCatContextType>(null);

export const PipeCatProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const client = useRef(
		new RTVIClient({
			transport: new DailyTransport(),
			params: {
				baseUrl:
					"https://947c-2401-4900-889b-1e1c-b9c5-719-6da3-b76a.ngrok-free.app",
				endpoints: {
					connect: "/connect",
				},
			},
			enableMic: true, // Enable microphone if needed
		})
	);

	return (
		<PipeCatContext.Provider value={client.current}>
			{children}
		</PipeCatContext.Provider>
	);
};

export const usePipeCat = () => {
	const context = useContext(PipeCatContext);
	if (!context) {
		throw new Error("usePipeCat must be used within a PipeCatProvider");
	}
	return context;
};
