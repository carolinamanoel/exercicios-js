//Function expression imediatamente invocada

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()
//O que está definido aqui foge do escopo global