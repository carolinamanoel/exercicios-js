const filhas = ['Valesca', 'Cibelena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos, 'Fulano') //concatenar os dois arrays. além de concatenar, pode adicionar outro elemento.
console.log(todos, filhas, filhos)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))
//[[]] matriz = array de array