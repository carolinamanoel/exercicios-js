//Fila - Push()/Shift()
var fila = [];
fila.push(1);
fila.push(2);
fila.push(3);
fila.shift();
console.log(fila);

fila.push(4);
console.log(fila);

fila.shift();
fila.shift();
console.log(fila);

//Pilha - Push()/Pop()
var pilha = [];
pilha.push(1);
pilha.push(2);
pilha.push(3);

console.log(pilha);

pilha.pop();
pilha.push(4);

console.log(pilha);

pilha.pop();
pilha.push(5);
pilha.pop();

console.log(pilha);