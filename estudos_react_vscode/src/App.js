import React from "react";
import { useState } from "react";

function App() {
	const [nathan, setNathan] = useState("");

	return (
		<div className="App">
			<h1>Olá {nathan}</h1>
			<input type="text" onChange={(e) => setNathan(e.target.value)} />
		</div>
	);
}

export default App;
