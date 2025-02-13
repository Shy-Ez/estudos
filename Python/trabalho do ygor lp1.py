from datetime import datetime
import re
# 
def ler_nome_nao_vazio(nome_variavel):
    valor_lido = input(f'Entre com o {nome_variavel} do usuario: ')
    while valor_lido == '':
        print(f'O {nome_variavel} não pode ser vazio!')
        valor_lido = input(f'Entre com o {nome_variavel} do usuario: ')
    return valor_lido

def verifica_data_valida(data_texto):
    try:
        data_valida = datetime.strptime(data_texto, "%d/%m/%Y")
        
        return True
    except:
        return False

def ler_data_valida():
    dataNascimentoString = input('Entre com a data de nascimento: ')
    while not verifica_data_valida(dataNascimentoString):
        print('Data inválida!')
        dataNascimentoString = input('Entre com a data de nascimento: ')
    dataNascimento = datetime.strptime(dataNascimentoString, "%d/%m/%Y")
    
    return dataNascimento


def verifica_email_valido(email):
    regex = r'^[a-zA-Z0-9._%+-]+@+[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    return re.match(regex, email) is not None


def ler_email_valido():
    email = input('Entre com o email do usuario: ')
    while not verifica_email_valido(email):
        print('Email inválido!')
        email = input('Entre com o email do usuario: ')
        
    return email

def ler_dados():
    nome = ler_nome_nao_vazio('nome')
    email = ler_email_valido()
    senha = ler_nome_nao_vazio('senha')
    dataNascimento = ler_data_valida()
    

    BD = {
        'nome': nome,
        'email': email,
        'senha': senha,
        'dataNascimento': dataNascimento,
    }

    return BD

def imprimir_dados(BD):
    print(f"Nome:\t{BD['nome']}")
    print(f"Email:\t{BD['email']}")
    print(f"Senha:\t{BD['senha']}")
    print(f"Data:\t{BD['dataNascimento'].strftime('%d/%m/%Y')}")

dados_do_usuario = ler_dados()
imprimir_dados(dados_do_usuario)
