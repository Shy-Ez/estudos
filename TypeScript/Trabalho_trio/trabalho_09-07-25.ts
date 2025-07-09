//1) Crie as classes Jogador, e Guerreiro, Mago e Arqueiro, as quais herdam de Jogador. Defina as devidas propriedades públicas, privadas e protegidas, de forma a estarem encapsuladas e com seus devidos métodos get e/ou set.
//2) A classe Jogador deve ter o método atacar(), cujo argumento é outro Jogador.
//3) Crie a classe Habilidade, com suas devidas propriedades públicas, privadas e protegidas. Pode haver outras classes de habilidades que herdam de Habilidade, ou não. Vocês escolhem.
//4) A classe Jogador deve ter um array (lista) de Habilidade. Ela tem uma lista vazia, mas suas subclasses devem ter ao menos 1 Habilidade.
//5) Simule uma batalha com as classes criadas. Pelo menos 3 jogadores devem se atacar. Deve ser impresso no console os ataques e, após o fim da batalha, imprimir outro log com o resultado da batalha.

class Jogador {
    private _vida: number;
    private _nivel: number;
    protected habilidade: Habilidade[]
    constructor(vida: number, nivel: number) {
        this._vida = vida;
        this._nivel = nivel; // _(underline) para armazenar internamente
        this.habilidade = []; 
}

    get nivel(): number {
        return this._nivel;
    }
    get vida(): number {
        return this._vida
    }
    public tomouDano(dano:number){
        this._vida = Math.max(0, this._vida - dano); //permite que o valor mínimo da vida seja 0, evitando vida negativa.
    }
    public atacar(alvo: Jogador): void {
        const dano = this.nivel * 10  
        alvo.tomouDano(dano);
    }
    
}

class Guerreiro extends Jogador {
    private espada: string;

    constructor(espada: string, vida: number, nivel: number) {
        super(vida, nivel);
        this.espada = espada;
    }
}

class Mago extends Jogador {
    private cajado: string;

    constructor(cajado: string, vida: number, nivel: number) {
        super(vida, nivel);
        this.cajado = cajado;
    }
}

class Arqueiro extends Jogador {
    private arco: string;

    constructor(arco: string, vida: number, nivel: number) {
        super(vida, nivel);
        this.arco = arco;
    }
}

class Habilidade{
    private bola_de_fogo: number;
    private trovoada: number;
    private chuva_de_flechas: number;
    private Grito_de_provocação:number;

    constructor(bola_de_fogo: number, trovoada: number, chuva_de_flechas: number, Grito_de_provocação:number){
        this.Grito_de_provocação = Grito_de_provocação;
        this.bola_de_fogo = bola_de_fogo;
        this.chuva_de_flechas = chuva_de_flechas;
        this.trovoada = trovoada
    }
}


var j1 = new Guerreiro("espada", 120, 5);
var j2 = new Arqueiro("arco", 100, 7);
var j3 = new Mago("cajado", 80, 10);

console.log("Round 1:");
j1.atacar(j2);
console.log(`Guerreiro ataca Arqueiro, Arqueiro agora tem ${j2.vida} de vida.`);  //cifrão serve para inserir variavel dentro de uma string.

j2.atacar(j3);
console.log(`Arqueiro ataca Mago, Mago agora tem ${j3.vida} de vida.`);

j3.atacar(j1);
console.log(`Mago ataca Guerreiro, Guerreiro agora tem ${j1.vida} de vida.`);
