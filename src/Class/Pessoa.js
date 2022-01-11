class Pessoa {
    constructor(name, idade, email) {

        var _name = name;
        this.setName = function (name) { _name = name; }
        this.getName = function () { return _name; }

        var _email = email;
        this.setEmail = function (email) { _email = email; }
        this.getEmail = function () { return _email; }

    }

    setar() {
        return this.nome;
    }

    carregarDadosPessoa() {
        this.nome = "Marcio";
        this.idade = "45";
        this.email = "marcio@hotmail.com";
        this.dataCadastro = "26/07/1980";
        return ({
            nome: this.nome,
            idade: this.idade,
            email: this.email,
            dataCadastro: this.dataCadastro,
        })
    }
}

export default Pessoa;