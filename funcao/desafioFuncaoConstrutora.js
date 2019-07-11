function Pessoa(nome) {
    this.nome = nome //This = Variável passou a ser pública

    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)

    }
}

const p1 = new Pessoa('João')
p1.falar()