const [a] = [10]
console.log(a) //Variável a recebeu o primeiro valor do array

const [n1, n3, n5, n6 = 0] = [10, 7, 9, 8] 
//Múltiplos elementos a partir de um ARRAY, tira da estrutura e atribui
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]