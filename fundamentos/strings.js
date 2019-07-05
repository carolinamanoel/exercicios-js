const escola = "Cod3r"

console.log(escola.charAt(4)) // charAt = letra que está no índice 4 da String
console.log(escola.charAt(5)) // letra que não está no índice, retorna valor vazio
console.log(escola.charCodeAt(3)) // valor dentro da tabela unicode
console.log(escola.indexOf('3')) // tenho o índice e quero saber o que tem dentro dele

console.log(escola.substring(1)) // a partir do índice 1 até o final
console.log(escola.substring(0, 3)) // vai do índice 0 até o índice 3, sem incluir o índice 3

console.log('Escola'.concat(escola).concat("!"))
//literál valor direto que você usa, sem armazenar numa variável, no caso aqui é o 'Escola'

console.log(escola.replace(3, 'e')) //substituir o item 3, pela letra 'e'

console.log('Ana,Maria,Pedro'.split(',')) // pegar a vírgula, separar e geral um ARRAY com 3 elementos independentes 
