print("Seja bem vindo ao sistema de media")
qtd=int(input("Quantas notas para tirar a media?"))
soma =0
nota=[]

for i in range(qtd):
    nota.append(int(input(f" Digite a nota da prova {i+1} ")))
for i in range(qtd):
    print(f"A nota da prova {i+1} é \nNota: {nota[i]}")
for i in range(qtd):
    soma= soma + nota[i]
print(f"A media das notas é{soma/qtd}")