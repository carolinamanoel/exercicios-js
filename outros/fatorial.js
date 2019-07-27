function fatorial(quantidade) {
    multiplicacao = 1
    // multiplicacao *= 2  
    // multiplicacao *= 3  
    // multiplicacao *= 4
    // multiplicacao *= 5

    for (var i = 2; i <= quantidade; i++) {
        multiplicacao = multiplicacao * i
    }

    return multiplicacao
}

console.log(fatorial(6))

fat = num => { 
    return num > 1 ? fat(num-1) * num : num }

console.log(fat(6))


//Digita 5
//1*2 = 2 
//2*3 = 6
//6*4 = 24
//24*5 = 120

/*Teste de mesa

i |  Multiplicacao  
- |  1
2 |  1 * 2 = 2
3 |  2 * 3 = 6
4 |  6 * 4 = 24
5 |  24 * 5 = 120

*/