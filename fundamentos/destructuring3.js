//Passar um objeto para função, e dentro da função ao invés de acessar o objeto, quero que ele tire de dentro do objeto 'mim e max'
function rand({ mim = 0, max = 1000}) {    
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40}
console.log(rand(obj))
console.log(rand()) //Está tentando desestruturar algo null ou undefined. Cuidado com isso.