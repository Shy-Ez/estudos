class Trabalhador
{
    private nome: string;
    private salario: number;

    public constructor(nome: string, salario: number)
    {
        this.nome = nome;
        this.salario = salario;
    }
    get_nome()
    {
        return this.nome;
    }
    get_salario()
    {
        return this.salario;
    }
    set_salario(novo_salario: number)
    {
        if(novo_salario > 3000)
        {
            this.salario = novo_salario;
            console.log("O salário atual é:", novo_salario)
        }
        else
        {
            console.log("Salário inválido.")
        }
    }
}
class Funcionario extends Trabalhador
{
    public patrao: string;
    constructor(nome: string, salario: number, patrao: string)
    {
        super(nome, salario);
        this.patrao = patrao;
    }
}
class Atendente extends Funcionario
{

}
class Gerente extends Funcionario
{

}
class ListaFuncionarios
{
    private Lista_de_funcionarios: Funcionario[] = [];
    set_funcionario(novo_funcionario: Funcionario)
    {
        this.Lista_de_funcionarios.push(novo_funcionario);  
    }
    imprime()
    {
        let s = "";
        for(let i = 0; i < this.Lista_de_funcionarios.length; i++)
        {
            let f = this.Lista_de_funcionarios[i];
            s += "Funcionário:" + f.get_nome() + "  " + f.get_salario() + "\n";
        }
        console.log(s);
    }
}

let funcionario = new ListaFuncionarios();
funcionario.set_funcionario(new Funcionario("Manu", 7000, "Jesus"));
funcionario.set_funcionario(new Funcionario("Hudson", 5000, "Jesus"));
funcionario.set_funcionario(new Funcionario("Pedro", 6000, "Jesus"));
funcionario.set_funcionario(new Funcionario("Guilherme", 4000, "Jesus"));
funcionario.set_funcionario(new Funcionario("Erick", 3001, "Jesus"));

funcionario.imprime()

