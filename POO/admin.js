import User from "./user.js"; // Importa a classe 'User' do arquivo 'user.js'.

export default class Admin extends User { // Define a classe 'Admin', que herda da classe 'User'.
    constructor(nome, email, nascimento, role ='admin', ativo = true){ // Define o construtor da classe 'Admin' com parâmetros: nome, email, nascimento, role (com valor padrão 'admin') e ativo (com valor padrão 'true').
        super(nome, email, nascimento, role, ativo); // Chama o construtor da classe 'User' com os mesmos parâmetros, para inicializar as propriedades da classe 'User'.
    }
    criaCurso(nomeCurso, vagas){
        return `Curso de ${nomeCurso} criado com ${vagas} vagas`
    }
}

// const novoAdmin = new Admin('Jose', 'josesarney@gay' , '1978-12-01'); // Cria uma nova instância da classe 'Admin' com os valores 'Jose', 'josesarney@gay' e '1978-12-01' para os parâmetros do construtor.

// console.log(novoAdmin); // Imprime o objeto 'novoAdmin' no console, mostrando suas propriedades e métodos.

// console.log(novoAdmin.exibirInfos()); // Chama o método 'exibirInfos()' no objeto 'novoAdmin', que deve estar definido na classe 'User' (ou em alguma classe que 'User' herde) para exibir informações sobre o objeto.
// console.log(novoAdmin.criaCurso('Futebol', '40'))