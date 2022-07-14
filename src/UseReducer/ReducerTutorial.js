import React, { useReducer } from "react";

//pass in the state and action
// if this action, pass the new state object that it should be updated to
const reducer = (state, action) => {
	switch (action.type) {
		case "INCREMENT":
			return { count: state.count++, showText: state.showText };
		case "TOGGLESHOWTEXT":
			return { count: state.count, showText: !state.showText };
		default:
			return state;
	}
};

const ReducerTutorial = () => {
	// useReducer: reducer function, intial values for all the states
	const [state, dispatch] = useReducer(reducer, {
		count: 0,
		showText: false,
	});

	console.log("reducer tutorial");
	return (
		<div>
			<h1>REDUCER Tutorial</h1>
			<h2> COUNT: {state.count}</h2>
			<button
				onClick={() => {
					dispatch({ type: "INCREMENT" });
					dispatch({ type: "TOGGLESHOWTEXT" });
				}}
			>
				CLICK HERE
			</button>
			{state.showText && <p>Show text if true</p>}
		</div>
	);
};

export default ReducerTutorial;
