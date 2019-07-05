let valor //não inicializa
console.log(valor)
console.log(valor2) //Is not defined = não foi definido

valor = null //Ausência de valor, não aponta pra nenhum local de memória
console.log(valor)
// console.log(valor.toString()) Não pode ler a propriedade toString de null

const produto = {}
console.log(produto.preco) //O produto está definido, mas o preço não = Undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //Evitar atribuir UNDEFINED
console.log(!!produto.preco)
// delete produto.preco = maneira certa de excluir o valor 
console.log(produto)

produto.preco = null //Dizer que o produto está sem preço
console.log(!!produto.preco)
console.log(produto)