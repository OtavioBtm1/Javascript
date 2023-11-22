// Importando as classes necessárias de arquivos externos
import User from "./user.js";       // Importa a classe User do arquivo "user.js"
import Docente from "./docente.js"; // Importa a classe Docente do arquivo "docente.js"
import Admin from "./admin.js";     // Importa a classe Admin do arquivo "admin.js"

// Criando uma nova instância da classe User com informações iniciais
const novoUser = new User('otavio', 'otavio@gmail.com' , '2004-02-17');

// Exibindo informações do novo usuário no console
console.log(novoUser.exibirInfos());

// Tentando alterar o nome do usuário (isso resultará em erro, pois a propriedade é privada)
// novoUser.#nome = 'Bala tensa';

// Como as propriedades são privadas, devemos usar um método público para atualizar o nome
// novoUser.atualizarNome('Bala tensa');

// Exibindo informações atualizadas do usuário
console.log(novoUser.exibirInfos());
