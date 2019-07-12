function MeuObjeto() {}
console.log (MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
//Todos os objetos criados a partir de uma função construtora, apontam para o mesmo protótipo.

console.log(MeuObjeto.prototype === obj1.__proto__)
//Quando cria um objeto a partir de uma função construtora usando o new, o protótipo desse objeto aponta para a função que criou o prototype.

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}`)
}
//Qualquer objeto que for criado a partir dessa função construtora, vai ter dentro do pai dele, o atributo nome.

obj1.falar()
obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

//Resumindo... assertivas verdadeiras
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === function.prototype)
//MeuObjeto é uma função. Ele tem esse atributo e por padrão ele aponta para a função do protótipo.

console.log(function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)