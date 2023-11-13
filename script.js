function conversorMoedas() {
    var soma = window.prompt("Quantos Doláres quer converter para Reais?")
    window.prompt = exchangeDollar
    var exchangeDollar = 5.32
    var realValue = soma * exchangeDollar
    realValue = realValue.toFixed(2)

    alert("R$" + realValue)

}



