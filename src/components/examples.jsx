import "../styles/examples.css";
import { useState } from "react";
import { TabButton } from "./tab-button";
import { EXAMPLES } from "../data.js";

export function ExampleSection() {
	const defaultTabText = { 
		title:
		"Explore React!",
		description: "React is truly incredible. Click the buttons to explore what you can do with it!"
	};

	const [tabContent, setTabContent] = useState(defaultTabText);
		
	function handleClick(selectedBtn) {
		setTabContent(selectedBtn);

		switch (selectedBtn) {
			case "Components":
				setTabContent({
					title: EXAMPLES.Components.title,
					description: EXAMPLES.Components.description,
					code: EXAMPLES.Components.code
				});
				break;

			case "JSX":
				setTabContent({
					title: EXAMPLES.JSX.title,
					description: EXAMPLES.JSX.description,
					code: EXAMPLES.JSX.code
				});
				break;

			case "Props":
				setTabContent({
					title: EXAMPLES.Props.title,
					description: EXAMPLES.Props.description,
					code: EXAMPLES.Props.code
				});
				break;

			case "State":
				setTabContent({
					title: EXAMPLES.State.title,
					description: EXAMPLES.State.description,
					code: EXAMPLES.State.code
				});
				break;

			default:
				setTabContent(defaultTabText);
				break;
		}
	}

	const tabButtons = [
		{ label: "Components" },
		{ label: "JSX" },
		{ label: "Props" },
		{ label: "State" },
	];

	return (
		<section id="examples">
			<h2>Examples</h2>
			<menu>
				{tabButtons.map(button => (
					<TabButton
						label={button.label}
						onClick={() => handleClick(button.label)}
						key={button.label}
						isActive={tabContent.title === button.label ? true : false}
					/>
				))}
			</menu>
			<div id="tab-content">
				<h3>{tabContent.title}</h3>
				<p>{tabContent.description}</p>
				<pre>
					<code>{tabContent.code}</code>
				</pre>
			</div>
		</section>
	);
}
