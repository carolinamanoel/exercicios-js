const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
//Vai pegar as chaves de um objeto.

console.log(Object.values(pessoa))
//Vai pegar os valores de um objeto.

console.log(Object.entries(pessoa))
//Vai retornar um array com subarrays (chave e valor = 'nome' e 'Rebeca').

//Definir a propriedade de uma forma mais completa, como dizer se pode ser sobrescrita ou não.
Object.defineProperties(pessoa, 'dataNascimento', {
    enumerable: true, 
    writable: false, //não pode ser sobrescrita, quando executa sempre vai aparecer o 2019.
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(pessoa.keys(pessoa))

//Object.assign 
const destino = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(destino, o1, o2)
//Coloca dentro do objeto de destino, as outras declarações.
//O a foi declarado primeiro como 1, mas depois vai ser sobrescrito e vai virar 4 (declarado em o2).
//Pega os atributos dos objetos que foram passados (o1 e o2), vai jogando dentro do objeto de destino.
//Final: Um objeto que será a concatenação de todos os outros objetos criados.