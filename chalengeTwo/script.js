function conversorPersonalizado() {
    var nome = window.prompt("Qual é o seu nome?")
    
    var dollarValue = 64
    var exchangeDollar = 5.32
    var realValue = dollarValue * exchangeDollar
    realValue = realValue.toFixed(2)

    window.alert("R$" + realValue + "  "+ nome)

}