//Garante que pelo menos uma vez haja repetição no laço.

function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min //O que ele fez nessa linha?
    return Math.floor(valor)
}

let opcao = -1

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a pŕoxima!')