//Dentro do MAP existe um laço que vai ser executado.
//Serve para fazer uma transformação do Array.
//Mapear o Array para outro Array do mesmo tamanho, só que com os dados transformados.
//O Array modificado vai ter o mesmo tamanho do Array original.

const nums = [1, 2, 3, 4, 5]

//For com propósito
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed.replace('.', ',')}`

resultado.nums.map(soma10).map(triplo).map(paraDinheiro)
//Vai fazer as funções para cada elemento do Array.

console.log(resultado)