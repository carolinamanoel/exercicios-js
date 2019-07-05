const prod1 = {}
prod1.nome = 'Celular Ultra Mega' 
//Esse nome foi criado dinamicamente dentro do OBJETO
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40 //Evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}
//É possível criar outros objetos dentro de um objeto
//Json não é a mesma coisa que OBJETO.
//Json é um formato textual e objeto, coleção de chaves e valor.

console.log(prod2)