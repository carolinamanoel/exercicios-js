//Recurso que foi introduzido ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

//Quer ter acesso a variável nome e idade. Tira de dentro de uma estrutura.

const { nome, idade } = pessoa //Tire de dentro do objeto pessoa, o nome e a idade
console.log(nome, idade)

const { nome: n, idade: i } = pessoa //Tire de dentro do objeto, e crie variáveis com a letra 'n' e letra 'i'
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)