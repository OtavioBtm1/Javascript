const cliente={
    nome: 'otavio',
    idade: 19,
    telefone:['11953210283', '11989668452'],
    saldo: 400,
    efetuaPagamento: function(valorcompra){// esse é um exemplo de função que pode ser efetuada dentro de um objeto, nesse caso uma que verifica um valor presente dentro dele
        if (valorcompra > this.saldo){// a função this retorna o valor que esta presente dentro de um atributo de um objeto
            console.log('Saldo insuficiente')
        }else{
            this.saldo -= valorcompra// nesse caso pegando o valor de "saldo" e diminuindo em relação ao valor da compra, e assumindo o valor decrescido
            console.log(`Compra efetuada, novo saldo: ${this.saldo}`)// aqui ja puxa o valor decrescido, após atender a condição do if 
        }
    }
}
cliente.efetuaPagamento(500)
cliente.efetuaPagamento(197)


