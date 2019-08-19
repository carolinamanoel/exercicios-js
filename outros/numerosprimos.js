function NumeroPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'Não é um número primo.'
        }
    }

    return 'É um número primo.'
}

console.log(NumeroPrimo(4))