//Object.preventExtensions 
//Não permite que uma nova extensão seja adicionada.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 199, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha branca'
delete produto.tag
console.log(produto)

//Object.seal
//Não consegue adicionar atributos, nem excluir.
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freeze = selado + valores constantes.
//Não pode inserir novos atributos, modificar ou excluir.