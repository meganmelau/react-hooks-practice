import React, { useEffect } from "react";

function Child({ returnComment }) {
	// if the function was changed, that is the dependency that triggers the rerender
	useEffect(() => {
		console.log("FUNCTION WAS CALLED");
	}, [returnComment]);

	return <div>{returnComment(" returnComment()")}</div>;
}

export default Child;
