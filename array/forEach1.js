const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

//Para cada novo elemento que for percorrido, vai chamar callback, passando o próprio elemento e o índice correspondente daquele elemento.
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
    //Somou índice + 1, porque o índice começa no 0. E na hora de mostrar, ficará 1), 2)...
}) 

/*Quando executar o 1º elemento, vai chamar a função
e o índice 0. E assim por diante...

A função callback recebe 3 parâmetros: nome, índice e array.
*/

aprovados.forEach(nome => console.log(nome))
//Aqui só está interessado em mostrar apenas o nome.