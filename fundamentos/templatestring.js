const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!' // não pode quebrar uma linha no meio de uma String
const template = `
    Olá
    ${nome}!` // considerou a quebra de linha
console.log(concatenacao, template)

// expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => s.toUpperCase() // dentro de um template string pode chamar uma função
console.log(`Ei... ${up(`cuidado`)}!`)
