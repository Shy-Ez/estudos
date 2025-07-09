 class Jogador {
  public nome: string;
  public id: number;
  public nivel: number;
  public dano: number;
  public habilidades: Habilidade[] = [];

  constructor(nome: string, id: number, nivel: number, dano: number) {
    this.nome = nome;
    this.id = id;
    this.nivel = nivel;
    this.dano = dano;
  }

  public atacar(alvo: Jogador): void {
    console.log(`${this.nome} atacou ${alvo.getNome()} causando ${this.dano} de dano.`);
    
  }

  public getNome(): string {
    return this.nome;
  }

  public adicionarHabilidade(h: Habilidade): void {
    this.habilidades.push(h);
  }
}
class Guerreiro extends Jogador {
  private forca: number;
  private resistencia: number;
  private durabilidade: number;

  constructor(nome: string, id: number, nivel: number, dano: number, forca: number, resistencia: number, durabilidade: number) {
    super(nome, id, nivel, dano);
    this.forca = forca;
    this.resistencia = resistencia;
    this.durabilidade = durabilidade;
    this.adicionarHabilidade(new Habilidade(10, 15, 5));
  }
}

class Mago extends Jogador {
  private magia: number;
  private resistenciaMagica: number;

  constructor(nome: string, id: number, nivel: number, dano: number, magia: number, resistenciaMagica: number) {
    super(nome, id, nivel, dano);
    this.magia = magia;
    this.resistenciaMagica = resistenciaMagica;
    this.adicionarHabilidade(new Habilidade(5, 5, 20));
  }
}

class Arqueiro extends Jogador {
  private pontaria: number;
  private foco: number;
  private estamina: number;

  constructor(nome: string, id: number, nivel: number, dano: number, pontaria: number, foco: number, estamina: number) {
    super(nome, id, nivel, dano);
    this.pontaria = pontaria;
    this.foco = foco;
    this.estamina = estamina;
    this.adicionarHabilidade(new Habilidade(20, 8, 15));
  }
}
class Habilidade {
  public agilidade: number;
  public resistencia_: number;
  public velocidade: number;

  constructor(agilidade: number, resistencia_: number, velocidade: number) {
    this.agilidade = agilidade;
    this.resistencia_ = resistencia_;
    this.velocidade = velocidade;
  }
}

let g1 = new Guerreiro("Pedrin", 1, 5, 50, 80, 70, 60);
let m1 = new Mago("Gui", 2, 4, 40, 90, 60);
let a1 = new Arqueiro("Biel", 3, 3, 45, 85, 75, 65);

// Batalha simulada
g1.atacar(m1);
m1.atacar(a1);
a1.atacar(g1);

console.log("Fim da 3° guerra mundial!");
