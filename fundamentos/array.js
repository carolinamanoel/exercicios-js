/* O ARRAY é uma forma de agrupar múltiplos valores de uma forma linear,
não tem múltiplas dimensões.
É uma estrutura indexada. O primeiro elemento a partir do índice 0.
O segundo elemento a partir do índice 1, etc...
*/

const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
//vai mostrar o índice 0 e o 3
//se acessar o índice 4 (que não existe), vai dizer que o valor está "undefined"

valores[4] = 10 //inseriu um valor no índice 4
console.log(valores)
console.log(valores.length) 
//LENGTH = vai dizer quantos elementos tem no ARRAY

valores.push({id: 3}, false, null, 'teste') //pode misturar coisas dentro de um ARRAY
console.log(valores) 
//É importante ter um ARRAY com cada tipo de coisa.

//Como DELETAR um índice do ARRAY
console.log(valores.pop()) 
//POP: Retorna o último valor do ARRAY, e o deleta do ARRAY

delete valores[0]
console.log(valores)

console.log(typeof valores)
//Um ARRAY é um OBJETO