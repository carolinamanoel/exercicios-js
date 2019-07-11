//Facory é uma função que sempre vai retornar um objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
//Criou novos objetos a partir da chamada da função 'criarPessoa'