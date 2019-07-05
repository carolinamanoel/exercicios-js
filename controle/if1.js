function soBoaNoticia(nota) {
    if (nota >= 7) {
        //se a condição for verdadeira, vai executar este bloco de código
        console.log('Aprovado com' + nota)
    }
}

soBoaNoticia(8.1) //só imprimiu no console quando foi Aprovado
soBoaNoticia(6.1)

function seForVerdadeiroEuFalo(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeiroEuFalo()
seForVerdadeiroEuFalo(null)
seForVerdadeiroEuFalo(undefined)
seForVerdadeiroEuFalo(NaN)
seForVerdadeiroEuFalo('')
seForVerdadeiroEuFalo(0)
seForVerdadeiroEuFalo(-1)
seForVerdadeiroEuFalo(' ')
seForVerdadeiroEuFalo('?')
seForVerdadeiroEuFalo([])
seForVerdadeiroEuFalo([1, 2])

//Nesse IF não colocou a condição, mas o programa executa automaticamente se é verdadeiro ou falso