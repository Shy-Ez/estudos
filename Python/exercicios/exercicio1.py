#escreva um programa que solicite 5 numeros inteiros e armazene-os em uma lista. em seguida, imprima a soma e a media dos numeros.

# uma lista vazia para armazenar os números
numeros = []

# Solicitando 5 números inteiros ao usuário
for i in range(5):
    numero = int(input(f"Digite o {i+1}º número inteiro: "))
    numeros.append(numero)

# Calculando a soma e a média
soma = sum(numeros)
media = soma / len(numeros)

# Imprimindo os resultados
print(f"A soma dos números é: {soma}")
print(f"A média dos números é: {media:.2f}")
