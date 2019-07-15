//Serve para transformar por exemplo, um array em um único elemento.
//O resultado sempre é passado para a próxima interação. 
//Recebe os dois primeiros elementos do array.
//Resultado dessa função é passado para a próxima interação... e assim por diante.

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota)) //array apenas das notas
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    //reduce recebe a callback, que tem o acumulador e o valor atual
    //internamente do reduce tem um for.
    console.log(acumulador, atual)
    return acumulador + atual
})
//Se quisesse colocar um valor inicial para o acumulador, seria aqui. Depois do }

console.log(resultado)