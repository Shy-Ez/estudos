class FormaGeometrica
{
}

class Retangulo extends FormaGeometrica
{
    private altura: number;
    private largura: number;

    constructor(altura: number, largura: number)
    {
        super();
        this.altura = altura;
        this.largura = largura;
    }
    Area(){
        this.largura*this.altura;
    }
    Perimetro(){
        this.altura*2 + this.largura*2;
    }
}
class Circulo  extends FormaGeometrica
{
    private circunferencia: number;
    private raio: number;
    private pi: number;
    constructor(circunferencia: number, raio: number, pi: number)
    {
        super();
        this.circunferencia = circunferencia;
        this.raio = raio;
        this.pi = pi;
    }
    Area()
    {
        this.pi*Math.pow(this.raio, 2);
    }
    Perimetro()
    {
        this.circunferencia = 2*this.pi*this.raio;
    }
}

let lista:FormaGeometrica[] = []
let x = new Retangulo(1, 2);
let y = new Circulo(5,65,3);
lista.push(x, y)

class ContaBancaria
{
    private titular: string;
    private saldo: number;
    private valor: number;
    constructor(titular: string, saldo: number, valor: number)
    {
        this.titular = titular;
        this.saldo = saldo;
        this.valor = valor;
    }
    retorna1(){
        return this.titular;
    }
    retorna2(){
        return this.saldo;
    }
    retorna3(){
        return this.valor;
    }
    sacar()
    {
        this.saldo - this.valor;
    }
    depositar()
    {
        this.saldo + this.valor;
    }

}
class Poupanca extends ContaBancaria
{
    private rende: number;
    constructor(rende: number)
    {
        super();
        this.rende = rende;
    }
}
class ContaCorrente extends ContaBancaria
{

}
