import React, { useEffect, useState } from "react";
import axios from "axios";

// make api call
// function called whenever the page rerender
// use to detect when page rerender, can specify what you want to detect
// imagine a function that imediately renders when the page lods --> console log
const EffectTutorial = () => {
	// call everytime state is changed
	const [data, setData] = useState("");
	const [count, setCount] = useState(0);
	// const [pic, setPic] = useState("");
	const url = "https://cataas.com/cat/gif";

	useEffect(() => {
		axios.get("https://cat-fact.herokuapp.com/facts").then((response) => {
			console.log("CALL FUN FACT");
			const randomFactIndex = Math.floor(
				Math.random() * response.data.length
			);
			setData(response.data[randomFactIndex].text);
		});
		// axios.get("https://cataas.com/cat").then((response) => {
		// 	console.log("fun picture API", response);
		// 	setPic(response.url);
		// });
		// rerenders every time count state is changed
	}, [count]);

	return (
		<div>
			<h1>useEffect TUTORIAL</h1>
			<h2>cool cat fact: {data}</h2>
			<img src={url} alt="cat pic" />
			<p>{count}</p>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				New Fact
			</button>
		</div>
	);
};

export default EffectTutorial;
