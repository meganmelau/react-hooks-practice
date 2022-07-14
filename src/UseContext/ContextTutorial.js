import React, { createContext, useState } from "react";
import Login from "./Login";
import User from "./User";

// creates context that contains the provider that give context to the child components
// higher order components
// because it wraps around login and user, they will have access to the state
export const AppContext = createContext(null);

const ContextTutorial = () => {
	const [username, setUsername] = useState("");
	return (
		<AppContext.Provider value={{ username, setUsername }}>
			<h1>Context Tutorial</h1>
			<Login />
			<User />
		</AppContext.Provider>
	);
};

export default ContextTutorial;
