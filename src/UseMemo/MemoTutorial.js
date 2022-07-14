import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

// Calls an api to return an array of 500 commments with usernames
// find the longest name
//  this is an expensive call, so useMemo will memoize, only compute when the data has changed
// everytime we click togggle it was recalculating the longest name even if the lognest name have not changed, therefore useMemo will work to save the value until the api is called and get a new dataset
export default function MemoTutorial() {
	const [data, setData] = useState(null);
	const [toggle, setToggle] = useState(false);

	useEffect(() => {
		axios
			.get("https://jsonplaceholder.typicode.com/comments")
			.then((response) => {
				setData(response.data);
			});
	}, []);

	const findLongestName = (comments) => {
		if (!comments) return null;

		let longestName = "";

		for (let i = 0; i < comments.length; i++) {
			let currentName = comments[i].name;
			if (currentName.length > longestName.length) {
				longestName = currentName;
			}
		}
		console.log("compute longest name");
		return longestName;
	};

	// the toggle state changing here will recalculate but in the real world this is when the data one is changed
	// read the console logs to see when it is calculated
	const getLongestName = useMemo(() => findLongestName(data), [toggle]);

	return (
		<div>
			<h1> useMemo Tutorial</h1>
			<div>Longest name: {getLongestName}</div>
			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				Toggle
			</button>
			{toggle && <h1>toggle</h1>}
		</div>
	);
}
