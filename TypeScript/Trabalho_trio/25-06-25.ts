//1) Crie a classe Trabalhador, com nome, salario e um construtor. Deve ter método get para nome, e get e set para salario, o qual deve ser sempre maior que 3000.
//2) Crie a classe Funcionario, o qual herda de Trabalhador. Que propriedades ela tem que Trabalhador não tem?
//3) No contexto de uma loja, crie as classes Atendente e Gerente. De quem essas classes herdam?
//4) Crie a classe ListaFuncionarios, a qual encapsula um array (lista) de Funcionario. O array privado pode ser inicializado vazio. Além dele, crie um método para inserir um novo Funcionario e um método para imprimir os dados de todos os Funcionario no console, em um único log.
//5) Instancie ListaFuncionarios e 5 funcionários, podendo ser apenas dos tipos Gerente ou Atendente. Insira os funcionários na ListaFuncionarios e imprima seus dados usando o método criado na questão 4.

export class Trabalhador 
{
  private nome: string;
  private salario: number;

  constructor(nome: string, salario: number)
  {
    this.nome = nome;
    this.salario = salario;
  }

  get nome(): string
  {
    return this.nome;
  }
  get salario(): number
  {
    return this.salario;
  }
  //Setter do salário – precisa ser > 3000

  set salario(valor: number)
  {
    if(salario > 3000)
    {
      this.salario = valor;
    }
  }
}



export class funcionario extends
{
  private cargo: string; //propriedade exclusiva de Funcionario
  private ID: number; //idem = o msm

  constructor(nome: string, salario: number, cargo: string, ID: number)
  {
    super(nome,salario);
    this.cargo = cargo;
    this.ID = ID;
  }

  get cargo():string 
  {
    return this.cargo;
  }
  get ID(): number 
  {
    return this.ID;
  }

  set cargo(NovoCargo: string)
  {
    this.cargo = NovoCargo;
  }
}



export class Atendente extends Funcionario 
{
  // Acrescentar propriedades específicas do atendente,
  // como "setor", se precisar.
}



export class Gerente extends Funcionario 
{
  // Acrescentar propriedades específicas do gerente,
  // como "departamento", se precisar.
}


export class ListaFuncionarios extends Funcionario
{
  private Lista: Funcionarios[] = [];

  inserir(Funcionario: Funcionario): void//nao retorna nenhum valor
  {
      this.Lista.push(Funcionario)
  }
  imprimirTodos(): void
  {
    console.log(this.Lista)
  }
}

const Lista = new ListaFuncionarios();

lista.inserir(new Gerente  ('Jota',    8000, 'Gerente Geral',       1));
lista.inserir(new Atendente('Mary',   3500, 'Atendente de Caixa',          2));
lista.inserir(new Atendente('DeLucas',   4200, 'Atendente', 3));
lista.inserir(new Gerente  ('Ferbs',9500, 'Gerente de Loja',    4));
lista.inserir(new Atendente('BruninhoDoGrau',   3600, 'Atendente Estoque',  5));

lista.imprimirTodos();









