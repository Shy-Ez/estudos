
<script lang='ts'>
	
	abstract class Jogador
{
    public nome: string;
    public vida: number;
    public forca: number;

    constructor(
         nome: string,
         vida: number = 50,
         forca: number = 1
    ) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

     abstract atacar(alvo: Jogador): void;

    receberDano(dano: number): void
    {
        this.vida -= dano;
        if (this.vida < 0) this.vida = 0;
    }

     estaVivo(): boolean
    {
        return this.vida > 0;
    }


}

class Guerreiro extends Jogador
{
    constructor(nome: string, vida: number = 50, forca: number = 5)
    {
        super(nome, vida, forca);
    }

    atacar(alvo: Jogador): void
    {
        let dano = this.forca + Math.floor(Math.random()*10);
        alvo.receberDano(dano);
			oponente = `${this.nome} causou ${dano} de ataque.`
			if(this.vida === 0){
				oponente = "Oponente morreu."
			}
    }
}

class Arqueiro extends Jogador
{
    private mirando: boolean = false;

    constructor(nome: string, vida: number = 50, forca: number = 1)
    {
        super(nome, vida, forca);
    }

    atacar(alvo: Jogador): void
    {
        //Se estiver mirando, causa mais dano
        let dano = this.mirando ? 3*(this.forca + Math.floor(Math.random()*10)) : this.forca + Math.floor(Math.random()*10);
        alvo.receberDano(dano);
		this.mirando = false;
			player = `${this.nome} causou ${dano} de ataque.`
			if(this.vida === 0){
				player = "Você morreu."
			}
    }

    mirar()
    {
        this.mirando = true;
				 player = `${jogador2.nome} está na mira.`
			
    }
}
	let oponente = $state("Guilherme te avistou! Ferrou!");
  let player = $state("O que você vai fazer?");
	let jogador1 = new Arqueiro("Biel");
	let jogador2 = new Guerreiro("Erick");
	let distancia =  $state(2);
</script>

<p>{oponente}</p>
<p>{player}</p>

<button onclick = {
									() =>
									{
										jogador1.mirar()
										if (distancia <= 0){
											jogador2.atacar(jogador1)
										}
										else{
											oponente = "Erick está aproximando."
											distancia --	}
									}
									}>
	Mi-mi-mirar
</button>

<button onclick = {
										() =>
										{
											jogador1.atacar(jogador2)
											
											if (distancia <= 0){
												jogador2.atacar(jogador1)
											}
											else{
											oponente = "Erick está aproximando."
											distancia -- 
										}
											
										}
									}
>
	A-a-atirar
</button>



