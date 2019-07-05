function tratarErroLancar(erro) {
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
}

function imprimirNomeGritado (objt) {
    try {
        console.log(obj.name.toUpperCase() + '!!!') //Não dá pra chamar toUpperCase de uma coisa UNDEFINED
    } catch (e) {
        tratarErroLancar(e)
    } finally {
        console.log('final')
    }
}

const obj = { nome: 'Roberto'} //nome da variável está errado 'nome', foi declarado name
imprimirNomeGritado(obj)