import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");

  const clientes = [
    {
      id: 1,
      nome: "Ana Cristina",
      telefone: "34 9 9999-0000",
      email: "ana@gmail.com",
    },
    {
      id: 2,
      nome: "Beto Silva",
      telefone: "34 9 9559-0000",
      email: "beto@terra.com",
    },
    {
      id: 3,
      nome: "Cassiano Sousa",
      telefone: "34 9 9955-7878",
      email: "casousa@gmail.com",
    },
    {
      id: 4,
      nome: "Diana Santos",
      telefone: "34 9 9955-7878",
      email: "dianasantos@gmail.com",
    },
  ];

  const handleValidate = (e) => {
    if (!nome) {
      alert("Nome é obrigatório!");
    } else if (!telefone) {
      alert("Telefone é obrigatório!");
    } else if (!email) {
      alert("Email é obrigatório!");
    } else {
      alert("Dados enviados com sucesso!");
    }
    e.preventDefault();
  };

  return (
    <div className="container bg-primary">
      {/* Header */}
      <div className="text-white mt-3">
        <h1>Controle de Estados</h1>
        <p>Usando React useState</p>
      </div>
      {/* Input de dados */}
      <form className="p-3">
        <div className="row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="col mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={handleValidate}
          className="btn btn-success"
        >
          Cadastrar
        </button>
      </form>
      {/* Output de dados */}
      <div className="bg-info p-3">
        <p>Nome: {nome}</p>
        <p>Telefone: {telefone}</p>
        <p>E-mail: {email}</p>
      </div>
      {/* Output table */}
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>E-mail</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.telefone}</td>
              <td>{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
    </div>
  );
}

export default App;
