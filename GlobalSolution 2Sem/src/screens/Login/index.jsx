import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { isAuthenticated } from '../../routes/auth';
import Logo from '../img/logo.png';
import './style.scss';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const authenticated = isAuthenticated(email, senha);

    if (authenticated) {
      console.log('Login bem-sucedido!');
      navigate('/home'); // Redireciona para a página Home após autenticação
    } else {
      console.log('Credenciais inválidas. Tenta novamente.');
    }
  };

  const handleClearStorage = () => {
    sessionStorage.clear();
    console.log('Session Storage foi limpo.');
    console.log('Usuários salvos:', usersFromStorage);
  };

  return (
    <body>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="logo-container">
          <img src={Logo} alt="Logo da MediCare" className="logo" />
        </div>

        <h3>Login</h3>

        <label htmlFor="username">Login</label>
        <input
          type="text"
          placeholder="Email"
          id="user"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Senha</label>
        <input
          type="password"
          placeholder="Senha"
          id="pwd"
          value={senha}
          onChange={handleSenhaChange}
        />

        <button type="submit">Log In</button>

        
        

        <div className="links">
          <Link to="/register" className="register-btn">
            Criar Conta
          </Link>
          <button type="button" onClick={handleClearStorage}>
          Limpar Storage
        </button>
        </div>
      </form>
    </body>
  );
};

export default Login;
