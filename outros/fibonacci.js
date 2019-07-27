function fib(numero) {
    if (numero <= 2) {
        return 1
    } else {
        return fib(numero - 1) + fib(numero - 2)
    }
} 

console.log(fib(1))


//0, 1, 1, 2, 3, 5
fibo = quantidade => {
    lista = [0, 1]
    /*lista.push(lista[0] + lista[1])
    lista.push(lista[1] + lista[2])
    lista.push(lista[2] + lista[3])*/
    
    for (var i = 2; i < quantidade; i++) {
        lista.push(lista[i-1] + lista[i-2])
    }

    return lista
}

console.log(fibo(6))



function fibo2(quant) {
    lista = [0, 1]
    i = 2
    /*lista.push(lista[0] + lista[1])
    lista.push(lista[1] + lista[2])
    lista.push(lista[2] + lista[3])*/

    while (i < quant) {
        lista.push(lista[i-1] + lista[i-2])
        i++
    }

    return lista
}

console.log(fibo(10))


/*Teste de mesa

i |  Lista  
- |  [0, 1] 
2 |  [0, 1, 1] 
3 |  [0, 1, 1, 2]
4 |  [0, 1, 1, 2, 3]
5 |  [0, 1, 1, 2, 3, 5]
6 |  [0, 1, 1, 2, 3, 5, 8]

*/
