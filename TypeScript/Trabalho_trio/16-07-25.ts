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

    constructor(nome: string, salario: number, cpf: string) {
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

    constructor(nome: string, salario: number, cpf: string, turno: string) {
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

    constructor(nome: string, salario: number, cpf: string, bonus: number = 2000) {
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
const gerente = new Gerente("Carlos", 3000, "123");
const caixa1 = new Caixa("Ana", 2500, "234");
const caixa2 = new Caixa("Bruno", 2800, "345");
const fax1 = new Faxineiro("Laura", 2000, "456", "manhã");
const fax2 = new Faxineiro("João", 2000, "567", "tarde");

gerente.insereFuncionario(caixa1);
gerente.insereFuncionario(caixa2);
gerente.insereFuncionario(fax1);
gerente.insereFuncionario(fax2);

gerente.coordenar();
gerente.aprovarAumento(caixa1, 2900);
gerente.aprovarAumento(caixa2, 2700);
gerente.aprovarAumento(fax1, 2500);

fax1.atualizaTurno("noite");
fax2.atualizaTurno("manhã");
fax1.limpar();
fax2.limpar();

console.log("\nRelatório");
console.log("Gerente: " + gerente.getNome() + ", Salário com bônus: R$" + gerente.getSalario());

const equipe = gerente.getEquipe();

for (let i = 0; i < equipe.length; i++) {
    const func = equipe[i];

    try {
        // Se conseguir pegar o turno, é Faxineiro
        const turno = func.getTurno();
        console.log("Faxineiro: " + func.getNome() + ", Turno: " + turno + ", Salário: R$" + func.getSalario());
    } catch (erro) {
        // Se der erro, é Caixa (porque não tem getTurno)
        console.log("Caixa: " + func.getNome() + ", Salário: R$" + func.getSalario());
    }
}
