let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a //Quando tira a {} da função, tem um retorno implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => {
    let Saudacao = 'Bom dia'
    return 'Olá'
} //Função sem parâmetro
console.log(ola())