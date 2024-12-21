import { useState, useEffect, useRef } from "react";

const useTypewriter = (text, speed = 30) => {
	const [displayedText, setDisplayedText] = useState("");
	const containerRef = useRef(null);

	useEffect(() => {
		let i = 0;

		const timer = setInterval(() => {
			if (i < text.length) {
				setDisplayedText(text.substring(0, i + 1));
				i++;

				// Scroll on each character update
				if (containerRef.current) {
					containerRef.current.scrollIntoView({
						behavior: "smooth",
						block: "end",
					});
				}
			} else {
				clearInterval(timer);
			}
		}, speed);

		return () => clearInterval(timer);
	}, [text, speed]);

	return { displayedText, containerRef };
};

export default useTypewriter;
