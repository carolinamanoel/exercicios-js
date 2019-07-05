//Função sem retorno
//Logo após a função, tem o bloco, sentenças de código que vai ser executado
//A função, recebe os dados, fazer o passo a passo, retornar um resultado, como uma receita de bolo.

function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Pode passar apenas um valor, o segundo será UNDEFINED
imprimirSoma(2, 3, 4, 5, 6) //Pode colocar outros valores, só vai somar o a + b

//Função com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) 