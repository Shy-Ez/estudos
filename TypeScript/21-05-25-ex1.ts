//Criar a classe Ponto3D. Ela deve ter os atributos públicos x,y e z, e um construtor para inicia-los.
// Criar a classe ListaDePontos, a qual encapsula uma lista de Ponto3D. Assim, a lista deve ser um atributo private. Não precisa de construtor, já que podemos inicializar a lista vazia em sua definição
// Criar método getPonto. O método tem como argumento o índice i do elemento a ser retornado, e retorna o i-ésimo ponto da lista. Crie também o método inserePonto. Ele recebe um novo ponto como argumento, e insere no final da lista.
//Crie um objeto da classe, instanciando-o, para testar a novo tipo lista. Insira 5 pontos.
class Ponto3D 
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

class ListaDePontos 
{
  private ldp: Ponto3D[] = []; //array (lista de pontos)
  
  public getPonto(i: number)
  {
    return this.ldp[i];
  }

  public inserePonto(ponto: Ponto3D)
  {
    this.ldp.push(ponto);
  }
}

