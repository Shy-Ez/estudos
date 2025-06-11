//1) Crie a classe Funcionario. Ela deve ter atributos privados nome e salario e um construtor para inicializar seus atributos (salário precisa ser maior que 3000 e menor que 20000). Crie um método do tipo 'get' getNome() para retornar o nome, outro para retornar salário e um método do tipo 'set' para alterar salário (fazendo a verificação acima).
//2) Crie uma classe que encapsula uma lista de funcionários, chamada ListaFuncionarios. Ela deve ter um atributo privado, um array (lista) de Funcionario, que inicializa vazio; um método para retornar um Funcionario a partir de um índice e um método para inserir um novo funcionário.
//3) Na classe ListaFuncionarios, crie o método imprimeFuncionarios(), o qual lista cada funcionário com seu nome e salário. Para isso, crie, na classe Funcionário, o método imprime(), o qual imprime o nome e o salário do objeto Funcionario que chama o método.
//4) Instanciar ListaFuncionarios, instanciar 5 objetos Funcionario e incluir na lista. Imprimir a lista com imprimeFuncionarios().
class funcionario
    {
        private nome: string;
        private salario: number;

        constructor(nome: string, salario: number)
        {
            this.nome = nome;
            if(salario >= 3000 && salario <=20000)
            this.salario = salario;
        }

        getNome(): string 
        {
            return this.nome
        }
        getSalario(): number
        {
            return this.salario
        }
        setSalario(NovoSalario: number): void 
        {
            this.salario = NovoSalario;
        }
        imprime()
        {
            console.log(this.nome, this.salario)
        }
    
    }
 
class ListaFuncionarios
{
    private ListaF: funcionario[] = [];
    
    getFuncionario(i: number)
    {
        return this.ListaF[i]
    }
    acrescentar(NovoF: funcionario)
    {
        this.ListaF.push(NovoF)
    }
    
    imprimeFuncionarios()
    {
       for(let i = 0; i < this.ListaF.length; i++)  
            this.ListaF[i].imprime();
    }
}
let F1,F2,F3,F4,F5: funcionario;
F1 = new funcionario("juscelino", 18000)
F2 = new funcionario("pedrin da quebrada", 3500)
F3 = new funcionario("mascelinho do gas", 5700)
F4 = new funcionario("tião ", 11000)
F5 = new funcionario("primata pelado", 12000)
let lista = new ListaFuncionarios
lista.acrescentar(F1)
lista.acrescentar(F2)
lista.acrescentar(F3)
lista.acrescentar(F4)
lista.acrescentar(F5)
lista.imprimeFuncionarios()
