{
    {
        {
            { 
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera) //Mesmo fora do bloco ou escopo, VAR é visível 

function teste() {
    var local = 123 
    console.log(local)
}
//Criar uma VAR numa FUNCTION, só é visível dentro da FUNCTION

teste()
console.log(local)

/*Quando cria uma variável e vai para o escopo global, existe a vantagem de acessá-la
de qualquer lugar do sistema. Mas por outro lado, qualquer subscrita dessa variável
pode geral um problema muito sério.
*/