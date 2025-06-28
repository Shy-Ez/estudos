class endereco 
{
    private Rua: string;
    private Cidade: string;
    private Estado: string;

    constructor(Rua: string, Cidade: string, Estado: string)
    {
        this.Rua = Rua;
        this.Cidade = Cidade;
        this.Estado = Estado;
    }
}

class Cliente
{
    private nome: string;
    private endereço: endereco;

    constructor(nome: string, endereço: endereco)
    {
        this.nome = nome;
        this.endereço = endereço;
    }

    get ExibirDados(): endereco
    {
        return this.endereço
    }
}
