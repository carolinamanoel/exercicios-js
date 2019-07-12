function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Até breve', 456)
console.log(aula1, aula2)

//Simulando o que o NEW faz...
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.aplly(obj)
    return obj
}

const aula3 = novo(Aula, 'Bem vindo', 123)
const aula4 = novo(Aula, 'Até breve', 456)
console.log(aula3, aula4)
//O resultado é o mesmo usando o operar NEW.
//Aqui mostra o que acontece "por baixo dos panos".