const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//x: índice do array
for(x in nums) {
    if(x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)    
}
//Enquanto o x for diferente de 5, ele vai executando.
//Quando encontrar o 5, vai sair 
//Break: está relacionado com o FOR, não age sobre o bloco IF.

for (y in nums) {
    if (y == 5) {
        continue
    }
    
    console.log(`${y} = ${nums[y]}`)
}
//Continue: ele vai interromper a repetição atual, e vai para a próxima repetição. Não sai do laço.

externo: 
//atribuiu um nome para este rótulo

for (a in nums) {
    for (b in nums) {
        if (a == 2 && b == 3) break externo
        //esse break está agindo sobre o for interno, por isso foi criado o rótulo. caso contrário, o break iria agir sobre o primeiro for, o externo.
        console.log(`Par = ${a},${b}`)
    }
}

console.log('Fim!')