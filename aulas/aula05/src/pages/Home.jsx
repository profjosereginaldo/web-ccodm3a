import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { ContatoContext } from "../contexts/ContatoContext";

function Home() {
  const { meusContatos, listarContatos } = useContext(ContatoContext);

  useEffect(() => {
    listarContatos();
  }, []);

  function handleRemover(event) {
    event.preventDefault();
  }

  return (
    <>
      <h1>Home</h1>
      <Link to="/novo">Novo Contato</Link>
      <ul>
        {meusContatos.map((contato, key) => (
          <li key={key}>
            {contato.nome} - {contato.telefone}{" "}
            <Link to={`/editar/${contato.id}`}>Editar</Link>{" "}
            <Link to={`/remover/${contato.id}`}>Remover</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
