import { useState } from "react";

function App() {
	const [nome, setNome] = useState();
	const [telefone, setTelefone] = useState();

	return (
		<div className="container bg-primary">
			<div className="text-white">
				<h1>Controle de Estados</h1>
				<p>Usando React useState</p>
			</div>
		</div>
		// <input
		// 	type="text"
		// 	placeholder="Digite seu nome"
		// 	value={nome}
		// 	onChange={(e) => setNome(e.target.value)}
		// />
		// <br />
		// <input
		// 	type="text"
		// 	placeholder="Digite seu telefone"
		// 	value={telefone}
		// 	onChange={(e) => setTelefone(e.target.value)}
		// />
		// <br />
		// <hr />
		// <p>Nome: {nome}</p>
		// <p>telefone: {telefone}</p>
	);
}

export default App;
