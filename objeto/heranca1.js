const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.__proto__)
//A partir disto, consegue acessar quem é o protótipo deste objeto, ou seja, quem é o objeto pai.
//Se tentar acessar este atributo e não encontrar, vai pro protótipo pai.