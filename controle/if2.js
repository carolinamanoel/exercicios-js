function teste1(num) {
    if (num > 7)
        console.log(num) //só essa sentença está associada a este bloco
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {
    if (num > 7); 
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
//A linha de código do if não está fazendo nada
//O bloco está sendo executado
//Não usar ; nas estruturas do IF