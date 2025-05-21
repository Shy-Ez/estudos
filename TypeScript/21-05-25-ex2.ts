//Recrie a classe encapsulada Pessoa, com atributos privados nome e cpf, com construtor para iniciá-los. A classe deve ter getNome, setNome e getCpf (cpf não deve ser alterado).

class pessoa {
  private nome: string;
  private cpf: number;

  constructor(nome: string, cpf: number){
    this.nome = nome
    this.cpf = cpf
  }
  getnome(): string
  {
    return this.nome
  }
}
