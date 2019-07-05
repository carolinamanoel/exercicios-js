const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) //está acessando o atributo de um objeto através do this
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e objeto

const falarDePessoa = pessoa.falar.bind(pessoa) 
//você passa um objeto no qual você quer que seja resolvido no this. Aqui o this vai ser pessoa

falarDePessoa()
