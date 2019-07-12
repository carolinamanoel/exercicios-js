const obj = { a: 1, b: 2, c: 3, soma () { return a + b + c } }
console.log(JSON.stringify(obj))

//Quando escreve em JSON, é preciso colocar "" para que seja válido.
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.77, "b": string", "c": true, "d": {}, "e": [] }'))