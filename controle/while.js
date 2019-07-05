//É mais apropriado para quando tem uma quantidade indeterminada de repetições
//Enquanto o usuário não digitar -1... faça isso.
//Enquanto for verdadeiro executa, só vai sair quando for falso sai do laço.

function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random() * (max - min) + min //O que ele fez nessa linha?
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a pŕoxima!')