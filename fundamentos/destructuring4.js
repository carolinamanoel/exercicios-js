function rand ([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] //Se o min for maior que o max, inverta eles. Na segunda parte está usando array.
    const valor = Math.random() * (max - min) + min //O que ele fez aqui? o.o
    return Math.floor(valor)
}

console.log(rand()([50, 40])) //Passou primeiro o max = 50, e depois o min = 40
//Tira os atributos que você quer, e já opera de forma mais direta sem precisar acessar o objeto.
