const carrinho = [
    '{ "Nome": "Borracha", "Preço": 3.45 }',
    '{ "Nome": "Caderno", "Preço": 13.90 }',
    '{ "Nome": "Kir de lápis", "Preço": 41.22 }',
    '{ "Nome": "Caneta", "Preço": 7.50 }',
]

//Retornar um Array apenas com os preços. 
const paraObjeto = json => JSON.parse(json) //Transformou de JSON para Objeto. 
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)