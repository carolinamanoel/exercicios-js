const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai) //criou o objeto filha tendo como protótipo o objeto pai
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)
//Pegou a cor do cabelo do protótipo pai, pois corCabelo não foi definido em filha2.

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for (let key in filha2) {
    filha2.hasOwnProperty(key) ? //propriedade pertence a filha2, então retorna true.
        console.log(key) : console.log(`Por herança: ${key}`)
}
//Nome pertence ao objeto, mas o cabelo veio por herança. 
//Nesse for só retornou o que veio pelo objeto.