class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

//Extends: Dentro de class, é a forma de definir que está vinculado com o protótipo de Avo.
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //Super class de Pai, é Avo.
        this.profissao = profissao //Está atribuindo profissão ao objeto que foi instanciado.
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho)