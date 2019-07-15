//Usar operador new + função = Resultado será um OBJETO.
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] //Forma mais recomendada para definir um Array.
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) //Undefined

aprovados[3] = 'Paulo' //Substituir elemento que já existe
aprovados.push('Abia') //Adicionar novo elemento ao Array, mais comum. Abia entrou no índice 4. 
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) 
//Os índices que não tem nada 5, 6, 7, 8, vão ser UNDEFINED.
//Pois não tem nada dentro deles, não foram declarados.
console.log(aprovados[8] ===  undefined)

console.log(aprovados)
aprovados.sort() //Causou alteração dentro do próprio Array original.
console.log(aprovados)

delete aprovados[1] 
//Deletar o índice 1. Mas não muda os outros índices. O elemento de índice 2, continua sendo o mesmo. Não vai para o índice 1 porque o mesmo foi deletado.

console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) //1: Trabalha no primeiro índice. 1²: Quantas casas após a primeira delimitação.
console.log(aprovados)