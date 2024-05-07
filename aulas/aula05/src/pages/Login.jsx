import { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleClick(event) {
    login("jose@email.com", "abcd1234");
    navigate("/")
  }

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleClick}>Entrar</button>
    </>
  );
}

export default Login;
