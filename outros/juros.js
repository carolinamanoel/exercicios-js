TotalAPagarSimples = (capital, taxa = 5, tempo = 10) => ( capital * (taxa / 100) * tempo ) + capital 

console.log(`Simples: ${TotalAPagar(200, 1)}`)