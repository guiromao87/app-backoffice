import { useState } from 'react';
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../../services/config';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const navigate = useNavigate();

  const handlerSubmit = (event) => {
    event.preventDefault();

    api
      .post('/login', { email, senha: password })
      .then((resposta) => {
        sessionStorage.setItem('token', resposta.data.token);
        sessionStorage.setItem('name', resposta.data.nome);
        navigate('/home');
      })
      .catch((erro) => {
        alert('Email ou senha inválidos');
      });
  };

  return (
    <div className="teste">
      <div className="container">
        <form onSubmit={handlerSubmit}>
          <h1>Cloud4Care Backoffice</h1>
          <div className="input-field">
            <input
              type="text"
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type={visibilityPassword ? 'text' : 'password'}
              placeholder="Digite seu senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="icon" onClick={() => setVisibilityPassword(!visibilityPassword)}>
              {visibilityPassword ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          <button>Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
