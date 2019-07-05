let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //Está mexendo no escopo global, tomar cuidado.

const obj = {}
comparaComThis = comparaComThis.bind(obj) 
//Quando chamar o this a partir de agora, vai comparar com o obj e não mais com o escopo global.
comparaComThis(global)
comparaComThis(obj)

//Esse comportamento não acontece no arrow function
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
//O this não vai apontar pro global aqui. 
//No arrow o this aponta pro objeto no lugar que a função foi definida.
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
//O que é mais forte: bind ou arrow function? Arrow function
//O this aponta para o objeto no qual a função foi escrita.

