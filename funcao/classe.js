 class Pessoa {
     constructor(nome) {
         this.nome = nome //This = Variável passou a ser pública
     }

     falar() {
         console.log(`Meu nome é ${this.nome}`)

     }
 }

 const p1 = new Pessoa('João')
 p1.falar()


const pessoa = nome => {
     return {
         falar: () => console.log(`Meu nome é ${nome}`)
         //Não precisou usar o this. aqui, porque a variável está dentro da função
     }
 }

 const p2 = pessoa('João')
 p2.falar()