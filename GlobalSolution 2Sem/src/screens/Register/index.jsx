import React, { useState } from 'react';
import './style.scss';
import { useNavigate } from 'react-router-dom';

export function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSenhaChange = (e) => {
    setSenha(e.target.value);
  };

  const handleConfirmarSenhaChange = (e) => {
    setConfirmarSenha(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (senha !== confirmarSenha) {
      console.error('As senhas não coincidem.');
      return;
    }

    const newUser = {
      email: email,
      senha: senha,
    };

    // Verificar se já existem usuários no sessionStorage
    const usersFromStorage = JSON.parse(sessionStorage.getItem('users')) || [];

    // Adicionar o novo usuário à lista de usuários
    usersFromStorage.push(newUser);

    // Atualizar os usuários no sessionStorage
    sessionStorage.setItem('users', JSON.stringify(usersFromStorage));

    console.log('Usuário registrado com sucesso:', newUser);
    console.log('Usuários salvos:', usersFromStorage);

    navigate('/');
  };

  return (
    <body>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Cadastro</h3>

        <label htmlFor="username">Email</label>
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

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input
          type="password"
          placeholder="Confirmar Senha"
          id="confirmPwd"
          value={confirmarSenha}
          onChange={handleConfirmarSenhaChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </body>
  );
}

export default Register;
