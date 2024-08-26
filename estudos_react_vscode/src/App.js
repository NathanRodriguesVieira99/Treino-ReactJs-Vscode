import React from "react";
import { useState } from "react";

function App() {
	const [nome, setNome] = useState("");

	return (
		<div className="App">
			<h1>Olá {nome}</h1>
			<input type="text" onChange={(e) => setNome(e.target.value)} />
		</div>
	);
}

export default App;
