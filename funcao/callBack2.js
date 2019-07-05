const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//Sem callback
let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com callback
notasBaixas = notas.filter() 
//É uma função que vai filtrar os elementos de um array em cima de um determinado critério. 
//Se a função retornar true, significa que aquele elemento deve ser adicionado no array que está sendo gerado.
//Se for false, elemento não será adicionado.