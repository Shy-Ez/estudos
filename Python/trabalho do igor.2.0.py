from datetime import datetime
import re
import sys

# Inicializar lista para armazenar cadastros
cadastros = []

# Função de menu. A função que tem todas as outras.
def menu():
     while True:
        pergunta = input("O que deseja fazer? (cadastro/excluir/contas/sair): ").lower()
        if pergunta == "cadastro":
            dados = ler_dados()
            cadastros.append(dados) # Armazena os dados na lista de cadastros
            imprimir_dados(dados)   # A conta será criada e os dados serão impressos.

        elif pergunta == "excluir":
            if cadastros:
                excluir_cadastro(cadastros.pop(0)) # excluíra a conta mais recente criada.
            else:
                print("Nenhum cadastro disponível para excluir.")

        elif pergunta == "contas":
            if cadastros:
                for dados in cadastros:
                    imprimir_dados(dados) # Vê contas criadas.
            else:
                print("Nenhuma conta criada.")

        elif pergunta == "sair":
            sys.exit("Encerrando o programa.") # Encerra o programa de vez.
        else:
            print("Opção inválida. Tente novamente.")
            
# Função para ler um valor não vazio.
def ler_nome_nao_vazio(nome_variavel):
    valor_lido = input(f'Entre com o {nome_variavel} do usuário: ')
    while valor_lido == '':
        print(f'O {nome_variavel} não pode ser vazio!')
        valor_lido = input(f'Entre com o {nome_variavel} do usuário: ')
    return valor_lido

# Função para verificar se a data é válida.
def verifica_data_valida(data_texto):
    try:
        data_valida = datetime.strptime(data_texto, "%d/%m/%Y")
        return True
    except:
        return False

# Função para ler uma data válida.
def ler_data_valida():
    dataNascimentoString = input('Entre com a data de nascimento: ')
    while not verifica_data_valida(dataNascimentoString):
        print('Data inválida!')
        dataNascimentoString = input('Entre com a data de nascimento: ')
    dataNascimento = datetime.strptime(dataNascimentoString, "%d/%m/%Y")
    return dataNascimento

# Função para verificar se o email é válido.
def verifica_email_valido(email):
    regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(regex, email) is not None

# Função para ler um email válido.
def ler_email_valido():
    email = input('Entre com o email do usuário: ')
    while not verifica_email_valido(email):
        print('Email inválido!')
        email = input('Entre com o email do usuário: ')
    return email

# Função para ler os dados da contas crias.
def ler_dados():
    nome = ler_nome_nao_vazio('nome')
    email = ler_email_valido()
    senha = ler_nome_nao_vazio('senha')
    dataNascimento = ler_data_valida()
    # dicionário
    BD = {
        'nome': nome,
        'email': email,
        'senha': senha,
        'dataNascimento': dataNascimento,
    }
    return BD

# Função para imprimir os dados do usuário.
def imprimir_dados(BD):
    print(f"Nome:\t{BD['nome']}")
    print(f"Email:\t{BD['email']}")
    print(f"Senha:\t{BD['senha']}")
    print(f"Data:\t{BD['dataNascimento'].strftime('%d/%m/%Y')}")

# Função para excluir um cadastro.
def excluir_cadastro(BD):
    chaves = ['nome', 'email', 'senha', 'dataNascimento']
    for chave in chaves:
        if chave in BD:
            del BD[chave]
    print("Cadastro excluído com sucesso.")

# Iniciar o menu e ler os dados da conta.
menu()
