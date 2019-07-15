const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
]

//Imperativo: você vai ensinar pra alguém, exatamente os passos que tem que ser executados, sem deixar nada faltando.
//Foco: Não é o que tem que ser feito, mas como tem que ser feito
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo
//Foco: O que eu quero? Não "importa" como isso vai acontecer
const getNota = aluno => aluno.nota //Pegar a nota do aluno
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
//Reduce: ideia de agregar os dados, reduzir em um só.

console.log(total2 / alunos.length)