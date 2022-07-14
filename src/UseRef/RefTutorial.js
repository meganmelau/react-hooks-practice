import React, { useRef, useState } from "react";

// easier way to access dom elements
// document.getElementById
// manually acces infomration from dom elements, you can do that using react
// react provides a virtual dom, shouldnt be indidvidual elemtn, the state update
//  if you do need to element dom elements -> useRef hook -> access dom element
// Ex: highlight input element after submitting name
const RefTutorial = () => {
	const [name, setName] = useState("Name should be changing");
	// no dom element selected so it is null
	const inputRef = useRef(null);
	const onClick = () => {
		// when you have reference, you need the current value
		// get the name from the input field and set it
		setName(inputRef.current.value);
		// make it empty for a new entry
		inputRef.current.value = "";
		// focuses on the input field, highlight to let user know they focus on it
		inputRef.current.focus();
	};

	return (
		<div>
			<h1>REF TUTORIAL</h1>
			<h1> {name}</h1>
			{/*  ref prop is set to inputRef so it will now access the input element */}
			<input type="text" placeholder="Enter here" ref={inputRef}></input>
			<button onClick={onClick}>Change Name</button>
		</div>
	);
};

export default RefTutorial;
