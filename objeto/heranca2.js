//Cadeia de protótipos (prototype chain)
const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B' }
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1)
console.log(filho.attr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    }, 
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing: sombreamento. Se encontra no elemento procurado, não vai procurar nos outros

}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}`
        //Sombreando a função status a partir do objeto volvo.
    }
}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)
//Estabelece uma relação de protótipo entre 2 objetos. Ferrari tem carro como seu protótipo.

console.log(ferrari)
console.log(volvo)
//Quando chama o objeto, vai ler os atributos e funções que pertecem ao objeto.

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())