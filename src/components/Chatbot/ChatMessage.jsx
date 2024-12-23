import React from "react";
import PropTypes from "prop-types";
import { BotIcon } from "./SvgIcons";
import useTypewriter from "../../hooks/useTypewriter";

const findJsonSections = (message) => {
	const sections = [];
	let currentPosition = 0;

	while (currentPosition < message.length) {
		// Find the next JSON-like section
		const nextJsonStart = Math.min(
			message.indexOf("[", currentPosition) === -1
				? Infinity
				: message.indexOf("[", currentPosition),
			message.indexOf("- {", currentPosition) === -1
				? Infinity
				: message.indexOf("- {", currentPosition)
		);

		if (nextJsonStart === Infinity) break;

		// Get text before the JSON
		if (nextJsonStart > currentPosition) {
			sections.push({
				type: "text",
				content: message.slice(currentPosition, nextJsonStart).trim(),
			});
		}

		// Handle array format
		if (message[nextJsonStart] === "[") {
			const jsonEnd = message.indexOf("]", nextJsonStart) + 1;
			if (jsonEnd === 0) break;

			try {
				const jsonStr = message.slice(nextJsonStart, jsonEnd);
				const data = JSON.parse(jsonStr.replace(/'/g, '"'));
				sections.push({
					type: "table",
					data: data,
				});
				currentPosition = jsonEnd;
			} catch (error) {
				currentPosition = nextJsonStart + 1;
			}
		}
		// Handle bullet point format
		else {
			let bulletPoints = [];
			let bulletStart = nextJsonStart;

			while (bulletStart !== -1 && message.startsWith("- {", bulletStart)) {
				const objectEnd = message.indexOf("}", bulletStart) + 1;
				if (objectEnd === 0) break;

				try {
					const objectStr = message.slice(bulletStart + 2, objectEnd);
					const data = JSON.parse(objectStr.replace(/'/g, '"'));
					bulletPoints.push(data);
					bulletStart = message.indexOf("- {", objectEnd);
				} catch (error) {
					break;
				}
			}

			if (bulletPoints.length > 0) {
				sections.push({
					type: "table",
					data: bulletPoints,
				});
				currentPosition = message.indexOf("}", nextJsonStart) + 1;
			} else {
				currentPosition = nextJsonStart + 1;
			}
		}
	}

	// Add any remaining text
	if (currentPosition < message.length) {
		sections.push({
			type: "text",
			content: message.slice(currentPosition).trim(),
		});
	}

	return sections;
};

const DataTable = ({ data }) => {
	const headers = Object.keys(data[0]);
	return (
		<div className='cb-w-fit'>
			<table className='cb-w-full cb-border-collapse cb-text-sm'>
				<thead>
					<tr className='cb-bg-purple-100'>
						{headers.map((header) => (
							<th
								key={header}
								className='cb-border cb-border-purple-200 cb-p-2 cb-text-left cb-font-semibold'
							>
								{header.charAt(0).toUpperCase() + header.slice(1)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, index) => (
						<tr
							key={index}
							className='cb-even:bg-purple-50'
						>
							{headers.map((header) => (
								<td
									key={header}
									className='cb-border cb-border-purple-200 cb-p-2 cb-text-sm'
								>
									{row[header]}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

const ChatMessage = ({ message, type }) => {
	const isUser = type === "user";
	console.log(isUser);
	const hasTableData = message.includes("[") || message.includes("- {");
	const { displayedText, containerRef } = useTypewriter(
		type === "assistant" && !hasTableData ? message : ""
	);

	const renderMessageContent = () => {
		if (!isUser && hasTableData) {
			try {
				const sections = findJsonSections(message);
				return (
					<div className='cb-w-fit'>
						{sections.map((section, index) => (
							<React.Fragment key={index}>
								{section.type === "text" && (
									<p className='cb-my-2 cb-font-semibold cb-text-gray-800'>
										{section.content}
									</p>
								)}
								{section.type === "table" && (
									<div className='cb-my-4'>
										<DataTable data={section.data} />
									</div>
								)}
							</React.Fragment>
						))}
					</div>
				);
			} catch (error) {
				console.error("Error parsing sections:", error);
				return <span>{message}</span>;
			}
		}
		return <span>{type === "assistant" ? displayedText : message}</span>;
	};

	return (
		<div
			ref={containerRef}
			className={`cb-flex ${
				isUser ? "cb-flex-row-reverse" : "cb-flex-row"
			} cb-items-end cb-gap-2 cb-mb-4`}
		>
			{type === "assistant" && (
				<div className='cb-h-8 cb-w-8 cb-flex cb-items-center cb-justify-center cb-rounded-full cb-bg-[#BE3CEB] cb-flex-shrink-0'>
					<BotIcon className='cb-w-5 cb-h-5 cb-text-white' />
				</div>
			)}
			<div
				className={`cb-w-fit cb-p-3 cb-rounded-lg ${
					isUser
						? "cb-bg-[#BE3CEB] cb-text-white cb-rounded-br-none cb-ml-auto"
						: "cb-bg-gray-100 cb-text-gray-800 cb-rounded-bl-none cb-mr-auto"
				} cb-font-semibold cb-text-sm`}
			>
				{renderMessageContent()}
			</div>
		</div>
	);
};

ChatMessage.propTypes = {
	message: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
};

export default ChatMessage;
