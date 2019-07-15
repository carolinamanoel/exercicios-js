const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) //Pegar só a nota do aluno, através do array

const notas1 = escola.map(getNotasDaTurma) //Varrer notas da turma
console.log(notas1)

//Ter um array com todas as notas de todos os alunos de todas as turmas

console.log([].concat([8.1, 9.3], [8.9, 7.3]))
Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.aplly([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)