class produto{
    codigo: number;
    nome: string;
    preco: number;

    constructor(codigo: number, nome: string, preco: number){
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
    getCodigo(){
        this.codigo
    }
    getNome(){
        this.nome
    }
    getPreco(){
        this.preco
    }

    setPreco(NovoPreco: number){
        if(NovoPreco < 0)
            this.preco = 0;
        else{
            this.preco = NovoPreco;
        }       
    }
    
}
let teste
teste.setPreco(10);


