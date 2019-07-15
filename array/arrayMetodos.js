const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //Remove último elemento do Array.
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //Remove o primeiro elemento do Array.
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

//Splice pode adicionar e remover elementos do Array

//Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') //A partir do índice 2, adicionar dois nomes.
console.log(pilotos)

//Remover
pilotos.splice(3, 1) //Remover um elemento a partir do índice 3.
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //Cria um novo Array a partir do índice 2, até o final.
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) //Pega a partir do índice 1, ele conta. Mas o índice 4 não vai entrar.
console.log(algunsPilotos2)