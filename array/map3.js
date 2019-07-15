Array.prototype.map2 = function(callback) {
    const newArray = [] //Criou Array vazio
    for (let i = 0; i < this.length; i++) { //Percorreu o Array original usando o THIS.
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{ "Nome": "Borracha", "Preço": 3.45 }',
    '{ "Nome": "Caderno", "Preço": 13.90 }',
    '{ "Nome": "Kir de lápis", "Preço": 41.22 }',
    '{ "Nome": "Caneta", "Preço": 7.50 }',
]

const paraObjeto = json => JSON.parse(json) 
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)