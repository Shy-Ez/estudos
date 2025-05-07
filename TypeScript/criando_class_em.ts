//definindo criando uma nova class
class estudante
{
    // tipos dessa nova class
    nome: string;
    idade: number;
    matriula: number;
    nota: number;
    
    // constructor é um meio de construção, com parametros.( para acessar esse valores dos parametros, use "this." + o nome do parametro)
    constructor(nome: string, id: number, mat: number)
    {
        this.nome = nome;
        this.idade = id;
        this.matriula = mat;
        this.nota = 0,1;

    }
    elogia(e: estudante)
    {
        console.log(this.nome + " elogia " + e.nome);
    }
}
 
let e1: estudante;
e1 = new estudante(Biel, 17, 13342);
let e2: estudante;
