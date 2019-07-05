function Pessoa() {
    this.idade = 0

    const self = this //essa constante não vai mudar nunca
    setInterval(function() {
        this.idade++
        console.log(this.idade)

    }/*.bind(this)*/, 1000)
}

new Pessoa