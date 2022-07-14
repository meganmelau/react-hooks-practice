import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("UseState InputValue");
  const [counter, setCounter] = useState(0);

  const increment = () => {
		setCounter(counter + 1);
  };

  const decrement = () => {
		setCounter(counter - 1);
  };

  const reset = () => {
		setCounter(0);
  };

  let onChange = (event) => {
		const newValue = event.target.value;
		setInputValue(newValue);
  };

  return (
		<div>
			<h1>Counter</h1>
			<div>{counter}</div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
			<div>
				<h2> Test to see useState</h2>
				<input placeholder="User Input" onChange={onChange} />
				{inputValue}
			</div>
		</div>
  );
};

export default StateTutorial;
