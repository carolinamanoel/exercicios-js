let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) 
//transformar um número em verdadeiro ou falso
//!! negação duas vezes, volta a ser a coisa original, mata o efeito da primeira negação
//!! colocando duas vezes a negação !! = número 1 representa que é verdadeiro

/*Situação que trabalha com um tipo que não é verdadeiro ou falso, 
mas no contexto que é requerido um verdadeiro ou falso, ele vai se comportar como verdadeiro
*/
console.log('os verdadeiros...')
console.log(!!3) 
console.log(!!-1)
console.log(!!' ') //basta ter um espaço em branco que já funciona
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

/*Situação que trabalha com um tipo que não é verdadeiro ou falso, 
mas no contexto que é requerido um verdadeiro ou falso, ele vai se comportar como falso
*/
console.log('os falsos...')
console.log(!!0)
console.log(!!'') //string vazia é falso
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) //vai olhar pra variável, não se a operação deu certo ou não

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' ')) 
//pelo menos um desses é verdade, que é esse = ' '
//retorna o primeiro ou o único valor verdadeiro

let nome = ''

console.log(nome || 'Desconhecido')
//nome deu falso, então com o || que é igual a ou, exibe "Desconhecido"