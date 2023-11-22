export const isAuthenticated = (email, senha) => {
  const users = JSON.parse(sessionStorage.getItem('users')) || [];
  
  // Mostra no console os valores de email e senha recebidos
  console.log('Email recebido:', email);
  console.log('Senha recebida:', senha);

  const usersFromStorage = JSON.parse(sessionStorage.getItem('users'));
  console.log('Usuários salvos:', usersFromStorage);

  const user = users.find((user) => user.email === email && user.senha === senha);

  if (user) {
    console.log('Usuário encontrado para autenticação:', user);
    console.log('Autenticado com sucesso!');
    return true;
  }
  
  console.log('Credenciais inválidas. Email:', email, 'Senha:', senha);
  return false;
};
