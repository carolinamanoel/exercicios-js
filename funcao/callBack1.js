const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//Callback: Passar uma função para outra função e com um determinado evento acontecer, essa função que passou, vai ser disparada e chamada de volta.
//Pode ser chamada várias vezes.

fabricantes.forEach(imprimir) //Para cada elemento que encontrar no array, vai chamar a função imprimir de volta.