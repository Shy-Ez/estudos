import json
from datetime import datetime  
import re  
import sys  

# Nome do arquivo JSON
ARQUIVO_DADOS = "cadastros.json"

# Lista para armazenar cadastros  
cadastros = []

# Função para carregar os cadastros do JSON ao iniciar  
def carregar_cadastros():  
    global cadastros  
    try:  
        with open(ARQUIVO_DADOS, "r", encoding="utf-8") as file:  
            cadastros = json.load(file)  
            # Converter datas de string para datetime  
            for dados in cadastros:  
                if isinstance(dados["dataNascimento"], str):  
                    dados["dataNascimento"] = datetime.strptime(dados["dataNascimento"], "%d/%m/%Y")  
    except (FileNotFoundError, json.JSONDecodeError):  
        cadastros = []  # Se o arquivo não existir ou estiver vazio, inicia uma lista vazia  

# Função para salvar os cadastros no JSON ao sair  
def salvar_cadastros():  
    with open(ARQUIVO_DADOS, "w", encoding="utf-8") as file:  
        # Converter datas de datetime para string  
        cadastros_serializaveis = [
            {**dados, "dataNascimento": dados["dataNascimento"].strftime("%d/%m/%Y")}
            for dados in cadastros
        ]
        json.dump(cadastros_serializaveis, file, indent=4, ensure_ascii=False)  

def menu():  
    carregar_cadastros()  # Carrega os cadastros ao iniciar  
    while True:  
        opcao = input("\nBem-vindo ao sistema de cadastro do Google\nO que deseja fazer? (cadastro/excluir/alterar/contas/sair): ").strip().lower()  
        
        if opcao == "cadastro":  
            dados = ler_dados()  
            cadastros.append(dados)  
            salvar_cadastros()  # Salva os dados ao adicionar um novo  
            print("\nConta criada com sucesso!")  
            imprimir_dados(dados)  

        elif opcao == "excluir":  
            excluir_cadastro()  
            salvar_cadastros()  # Salva após exclusão  

        elif opcao == "alterar":  
            alterar_cadastro()  
            salvar_cadastros()  # Salva após alteração  

        elif opcao == "contas":  
            if cadastros:  
                print("\nLista de contas cadastradas:")
                for dados in cadastros:  
                    imprimir_dados(dados)  
            else:  
                print("\nNenhuma conta criada.")  

        elif opcao == "sair":  
            salvar_cadastros()  # Salva antes de sair  
            sys.exit("\nEncerrando o programa.")  

        else:  
            print("\nOpção inválida. Tente novamente.")  

# Funções auxiliares
def ler_nome_nao_vazio(campo):  
    valor = input(f'Entre com o {campo}: ').strip()  
    while not valor:  
        print(f'O {campo} não pode ser vazio!')  
        valor = input(f'Entre com o {campo}: ').strip()  
    return valor  

def verifica_data_valida(data_texto):  
    try:  
        data = datetime.strptime(data_texto, "%d/%m/%Y")
        # Verifica se a data não é futura
        if data > datetime.today():
            return False
        return True  
    except ValueError:  
        return False  

def ler_data_valida():  
    data = input('Entre com a data de nascimento (dd/mm/yyyy): ').strip()  
    while not verifica_data_valida(data):  
        print('Data inválida!')  
        data = input('Entre com a data de nascimento (dd/mm/yyyy): ').strip()  
    return datetime.strptime(data, "%d/%m/%Y")  

def verifica_email_valido(email):  
    regex = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'  
    return re.match(regex, email) is not None  

def ler_email_valido():  
    email = input('Entre com o email: ').strip()  
    while not verifica_email_valido(email):  
        print('Email inválido!')  
        email = input('Entre com o email: ').strip()  
    return email  

def ler_senha_visivel():  
    senha = input('Entre com a senha: ').strip()  
    return senha  

def ler_dados():  
    nome = ler_nome_nao_vazio('nome')  
    email = ler_email_valido()  
    senha = ler_senha_visivel()  
    data_nascimento = ler_data_valida()  
    return {'nome': nome, 'email': email, 'senha': senha, 'dataNascimento': data_nascimento}  

def imprimir_dados(BD):  
    print(f"\nNome: {BD['nome']}")  
    print(f"Email: {BD['email']}")  
    print(f"Senha: {len(BD['senha']) * '*'}")  # Exibe a senha com asteriscos

    # Verifica se a data está como string e converte para datetime
    if isinstance(BD['dataNascimento'], str):  
        data_nascimento = datetime.strptime(BD['dataNascimento'], "%d/%m/%Y")  
    else:  
        data_nascimento = BD['dataNascimento']

    print(f"Data de Nascimento: {data_nascimento.strftime('%d/%m/%Y')}")  

def excluir_cadastro():  
    if not cadastros:  
        print("\nNenhum cadastro disponível para excluir.")  
        return  

    nome = input("Digite o nome da conta que deseja excluir: ").strip()  
    for i, dados in enumerate(cadastros):  
        if dados["nome"].lower() == nome.lower():  
            # Remove o cadastro encontrado
            del cadastros[i]  
            print("\nCadastro excluído com sucesso.")  
            return  
    print("\nCadastro não encontrado.")  

def alterar_cadastro():  
    if not cadastros:  
        print("\nNenhum cadastro disponível para alterar.")  
        return  

    nome = input("Digite o nome da conta que deseja alterar: ").strip()  
    for dados in cadastros:  
        if dados["nome"].lower() == nome.lower():  
            while True:  
                print("\nO que deseja alterar? (nome/email/senha/data/sair)")  
                campo = input("Escolha uma opção: ").strip().lower()  

                if campo == "nome":  
                    dados["nome"] = ler_nome_nao_vazio("novo nome")  
                    print("\nNome alterado com sucesso!")  

                elif campo == "email":  
                    dados["email"] = ler_email_valido()  
                    print("\nEmail alterado com sucesso!")  

                elif campo == "senha":  
                    dados["senha"] = ler_senha_visivel()  
                    print("\nSenha alterada com sucesso!")  

                elif campo == "data":  
                    dados["dataNascimento"] = ler_data_valida()  
                    print("\nData de nascimento alterada com sucesso!")  

                elif campo == "sair":  
                    print("\nAlterações finalizadas.")  
                    return  

                else:  
                    print("\nOpção inválida, tente novamente.")  

            return  

    print("\nCadastro não encontrado.")  

# Iniciar o menu  
menu()
