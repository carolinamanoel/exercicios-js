Array.prototype.forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
    //Percorre do primeiro elemento até o último.
        callback(this[i], i, this) //Para cada interação do Array, chama o Callback passando 3 parâmentros. Valor atual, índice e Array completo.
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
}) 