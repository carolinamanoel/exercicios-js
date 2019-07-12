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

console.log(ferrari.__proto__ === Object.prototype)
console.log(volvo.__proto__ === Object.prototype)
//Isso não vai acontecer se criar isso com uma função construtora.

console.log(Object.prototype.__proto__) 
//A forma de acessar o atributo dentro do objeto é __proto__

//O objeto em JS, tem uma referência para o seu protótipo. 
//E essa é a forma que o JS define a herança.