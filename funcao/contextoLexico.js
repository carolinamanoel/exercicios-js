const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()
//Quando executar isso, vai retornar o 'Global'.
//Porque quando a função foi declarada, ela não tem apenas o conteúdo interno, ela tem também consciência do local que foi definida.
//A função carrega consigo a informação do contexto do qual foi declarada.