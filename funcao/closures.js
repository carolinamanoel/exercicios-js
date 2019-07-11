//É o escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas à função

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) 
//Acesso a variável de um contexto diferente, mas guarda consigo a sua origem que no exemplo é x = Global