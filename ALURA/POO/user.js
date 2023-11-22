// Definição da classe 'User' que representa um usuário
export default class User {
#nome
#email
#nascimento
#role
#ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome;
        this.#email = email;
        this.#nascimento = nascimento;
        this.#role = role || 'estudante';
        this.#ativo = ativo;
    }
 get nome(){
    return this.#nome
 }
 get email(){
    return this.#email
 }
 get nascimento(){
    return this.#nascimento
 }
 get role(){
    return this.#role
 }
 get ativo(){
    return this.#ativo
 }
    // Método privado que retorna um objeto com informações do usuário
    #montaObjUser() {
        return {
            nome: this.#nome,
            email: this.#email,
            nascimento: this.#nascimento,
            role: this.#role,
            ativo: this.#ativo
        };
    }

    // Método público que retorna uma string formatada com o nome e email do usuário
    exibirInfos() {
        const objUser = this.#montaObjUser(); // Invoca o método privado para obter o objeto
        return `${objUser.nome} e ${objUser.email}`;
    }
}

// Criando uma nova instância da classe 'User' com alguns valores específicos
const novoUser = new User('otavio', 'otavio@hotmail.com', '2004-02-17');

// Exibindo a instância 'novoUser' que contém as informações do usuário
console.log(novoUser);

// Chamando o método 'exibirInfos()' da instância 'novoUser' e exibindo o resultado
console.log(novoUser.exibirInfos());

// Verificando se o protótipo da classe 'User' é um protótipo do objeto 'novoUser'
console.log(User.prototype.isPrototypeOf(novoUser));
