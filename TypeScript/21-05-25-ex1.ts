//Criar a classe Ponto3D. Ela deve ter os atributos públicos x,y e z, e um construtor para inicia-los.
// Criar a classe ListaDePontos, a qual encapsula uma lista de Ponto3D. Assim, a lista deve ser um atributo private. Não precisa de construtor, já que podemos inicializar a lista vazia em sua definição
// Criar método getPonto. O método tem como argumento o índice i do elemento a ser retornado, e retorna o i-ésimo ponto da lista. Crie também o método inserePonto. Ele recebe um novo ponto como argumento, e insere no final da lista.
//Crie um objeto da classe, instanciando-o, para testar a novo tipo lista. Insira 5 pontos.
class ponto3D 
{
  x: number;
  y: number;
  z: number;

  constructor(x: number,y: number,z: number)
  {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

class listaDePontos
{
  private lt: ponto3D[] = []; //array (lista de pontos)

  Ponto(i:number)
  {
    return this.lt[i]
  }
  inserePonto(NovoPonto: ponto3D)
  {
     this.lt.push(NovoPonto);
  }
  
}
const ponto = new listaDePontos();

ponto.inserePonto(new ponto3D(2,4,8));
ponto.inserePonto(new ponto3D(3,3,8));
ponto.inserePonto(new ponto3D(2,4,9));
ponto.inserePonto(new ponto3D(2,5,8));
ponto.inserePonto(new ponto3D(1,4,8));

console.log(ponto)


------------------------------------------------------------------------------------------------------------------------------------------------------
  // 5) Recrie a classe encapsulada Pessoa, com atributos privados nome e cpf, com construtor para iniciá-los. A classe deve ter getNome, setNome e getCpf (cpf não deve ser alterado).
  // 6) Crie a classe encapsulada ListaPessoa, da mesma maneira que a lista de pontos.
  // 7) Instancie a lista e insira 5 pessoas.
  // 5/6/7) Aqui
  
  class pessoa
{
    private nome: string;
    private cpf: number;

    constructor(nome: string, cpf: number)
    {
        this.nome = nome;
        this.cpf = cpf;
    }
    getNome()
    {
        return this.nome;
    }
   
    getcpf()
    {
        return this.cpf;
    }

}
class ListaPessoa 
{
    private lst: pessoa[] = [];

    Pessoa1(cpf: number)
    {
        return this.lst[cpf];
    }
    adicionarPessoa(novoNome: pessoa)
    {
        this.lst.push(novoNome);
    }
}

const lst = new ListaPessoa();

lst.adicionarPessoa(new pessoa("Gabriel", 12376778981));
lst.adicionarPessoa(new pessoa("Joâo Pedro", 12949678911));
lst.adicionarPessoa(new pessoa("Guilherme", 12340078912));
lst.adicionarPessoa(new pessoa("Tomás", 12345678952));
lst.adicionarPessoa(new pessoa("Erick", 12325648500));
