// Criar a classe encapsulada gato ou cachorro. ter ao menos 3 atributos, um construtor e metodos do tipo get e set, se necessario. lembrar de colocar atributos e metodos como public ou private.
class dog 
// atributos privados
{
    private nome: string;
    private tipo: string;
    private idade: number;
    // construtor
    constructor(nome: string,tipo: string, idade: number)
    {
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
    }
    // criar publics para todos os atributos usando get (Um getter e um metodo publico que retorna o valor de um atributo privado.)
    public getnome(): string 
    {
      return this.nome
    }
    public gettipo(): string 
    {
      return this.tipo
    }
    public getidade(): string
    {
      return this.idade
    }
    // criar um set com base em um public (Um setter e um metodo publico que altera o valor de um atributo privado.)
    public setidade(NovaIdade: string): void //o tipo void e usado para indicar que uma funcao ou metodo nao retorna nenhum valor.
    {
      this.idade
    }


    }