//Procedural: Recebe dados e manipula os valores recebidos.
processamento(valor1, valor2, valor3)
//Esses valores são processados pela função

//OO: Dados, dentro desses dados você tem as funções.
objeto = {
    valor1,
    valor2,
    valor3,
    processamento() {
        //...
    }
}

objeto.processamento() //A função processamento pertence ao objeto.
//Objeto: Cápsula que agrupa comportamentos e atributos.

//Princípios:
//1. abstração (exemplo de software pro Detran)
//2. encapsulamento: detalhes de implementação escondidos, mostrar só para quem precisa usar. (exemplo do citroen 98 e 2018)
    //Se preocupar com a implementação dos objetos e não com a comunicação deles (interface).
//3. herança: recebe atributos e comportamentos de um objeto "pai". 
    //Relação é um: exemplo o ser humano é um animal.
//4. polimorfismo: várias formas. A partir do conceiro genérico você consegue substituir por objetos concretos.
    //Celular -> Moto Z.