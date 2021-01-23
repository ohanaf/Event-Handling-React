import React, { useState } from "react";

function App() {
	const [headingText, setHeadingText] = useState("Hello");
	const [isOver, setisOver] = useState(false);

	function handleCllick() {
		setHeadingText("Submitted");
	}

	function handleOver() {
		setisOver(true);
	}

	function handleOut() {
		setisOver(false);
	}

	return (
		<div className="container">
			<h1>{headingText}</h1>
			<input type="text" placeholder="What's your name?" />
			<button
				style={{ backgroundColor: isOver ? "black" : "white" }}
				onClick={handleCllick}
				onMouseOver={handleOver}
				onMouseOut={handleOut}>
				Submit
			</button>
		</div>
	);
}

export default App;
