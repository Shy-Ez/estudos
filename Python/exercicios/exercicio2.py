# Criação da matriz 3x3
matriz = []

# Solicitação dos valores
print("Digite os valores para a matriz 3x3:")

# Preenchendo a matriz com os valores
for i in range(3):
    linha = []  # Cada linha é uma lista
    for j in range(3):
        valor = int(input(f"Digite o valor para a posição ({i+1},{j+1}): "))
        linha.append(valor)  # Adiciona o valor à linha
    matriz.append(linha)  # Adiciona a linha à matriz

# Cálculo da soma de todos os elementos
soma = sum(sum(linha) for linha in matriz)

# Cálculo da média
media = soma / 9  # A matriz tem 9 elementos (3x3)

# Exibindo os resultados
print("\nMatriz inserida:")
for linha in matriz:
    print(linha)

print(f"\nSoma dos números: {soma}")
print(f"Média dos números: {media:.2f}")







