// 1) Trabalhador
class Trabalhador {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number = 3000) {
        this.nome = nome;
        this.salario = salario < 3000 ? salario : 3000; //É uma forma de evitar um if completo.Se o salário passado for menor que 3000, use esse valor. Caso contrário, use 3000.
    }

    getNome() { 
        return this.nome; 
    }
    getSalario() { 
        return this.salario; 
    }
    setSalario(novosalario: number) {
        if (novosalario < 3000) this.salario = novosalario;
    }
}

// 2) FuncionarioBancario herda Trabalhador
class FuncionarioBancario extends Trabalhador {
    private cpf: string;

    constructor(nome: string, salario: number = 3000, cpf: string) {
        super(nome, salario);
        this.cpf = cpf;
    }

    getCpf() { 
      return this.cpf; 
    }

    // Encapsulamento protege dados (como cpf) de acesso direto
}

// 3) Faxineiro, Caixa e Gerente

class Caixa extends FuncionarioBancario {
    // Herda tudo, sem mudanças
}

class Faxineiro extends FuncionarioBancario {
    private turno: string;

    constructor(nome: string, salario: number = 3000, cpf: string, turno: string) {
        super(nome, salario, cpf);
        this.turno = turno;
    }

    atualizaTurno(novo: string) { 
      this.turno = novo; 
    }
    getTurno() { 
      return this.turno;
    }
    limpar() {
        console.log(`${this.getNome()} limpou o banco no turno ${this.turno}.`);
    }
}

class Gerente extends FuncionarioBancario {
    private equipe: FuncionarioBancario[] = [];
    private bonus: number;

    constructor(nome: string, salario: number = 3000, cpf: string, bonus: number = 2000) {
        super(nome, salario, cpf);
        this.bonus = bonus;
    }

    insereFuncionario(func: FuncionarioBancario) {
        this.equipe.push(func);
    }

    getSalario() {
        return super.getSalario() + this.bonus;
    }

    aprovarAumento(func: FuncionarioBancario, valor: number) {
        func.setSalario(valor);
        console.log(`${func.getNome()} recebeu aumento para R$${func.getSalario()}`);
    }

    coordenar() {
        console.log(`${this.getNome()} coordenou a equipe.`);
    }

    getEquipe() { 
      return this.equipe;
    }
}


// 5) Simulação simples
const gerente = new Gerente("Jotao", 3000, "123");
const Caixa1 = new Caixa("Pedrin", 2500, "122");
const Caixa2 = new Caixa("docinho de coco", 2500, "121");
const Fax1 = new Faxineiro("Biel", 2001, "167", "manhã");
const Fax2 = new Faxineiro("Vovó", 2100, "666", "tarde");

gerente.insereFuncionario(Caixa1);
gerente.insereFuncionario(Caixa2);
gerente.insereFuncionario(Fax1);
gerente.insereFuncionario(Fax2);

gerente.coordenar();
gerente.aprovarAumento(Caixa1, 5000);
gerente.aprovarAumento(Caixa2, 4999);
gerente.aprovarAumento(Fax1, 2002);

Fax1.atualizaTurno("noite");
Fax2.atualizaTurno("manhã");
Fax1.limpar();
Fax2.limpar();

console.log("\nrelatório");

console.log(`Gerente: ${gerente.getNome()}, Salário com bônus: R$ ${gerente.getSalario()}`);
console.log(`Caixa1: ${Caixa1.getNome()}, Salário com bônus: R$ ${Caixa1.getSalario()}`);
console.log(`Caixa2: ${Caixa2.getNome()}, Salário com bônus: R$ ${Caixa2.getSalario()}`);
console.log(`Faxineiro1: ${Fax1.getNome()}, Salário com bônus: R$ ${Fax1.getSalario()}, troca de turno para ${Fax1.getTurno()}`);
console.log(`Faxineiro2: ${Fax2.getNome()}, Salário com bônus: R$ ${Fax2.getSalario()}, troca de turno para ${Fax2.getTurno()}`);





