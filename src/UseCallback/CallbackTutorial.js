import axios from "axios";
import { useCallback, useState } from "react";
import Child from "./Child";

// memoizes a function
export default function CallBackTutorial() {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("The toggle does not do anything");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
		<div className="App">
			<h1> useCallback Tutorial</h1>
			<p>memoizes a function</p>
			<Child returnComment={returnComment} />

			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				{" "}
				Toggle
			</button>
			{toggle && <h1> toggle </h1>}
		</div>
  );
}
