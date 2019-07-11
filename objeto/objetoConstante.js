//Pessoa -> aponta pra um endereço de memória 123. 
//Nesse endereço é onde o objeto foi criado.

const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
//Não muda a referência do endereço de memória.
//Mas o dado que está sendo apontado, sim.

//pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana' } 
//Está tentando atribuir para pessoa <- novo objeto, e esse objeto está em um endereço novo.
//Pessoa é uma constante, sempre apontará para o objeto que está em 123, primeiro endereço.

Object.freeze(pessoa) //congelando o objeto pessoa. não consegue mais mexer no objeto.

pessoa.nome = 'Maria'
console.log(pessoa.nome)