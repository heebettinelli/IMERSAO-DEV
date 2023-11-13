function conversorPersonalizado() {
    var nome = window.prompt("Qual é o seu nome?")
    var valor = window.prompt("Quantos Doláres quer conveter eu Reais?")

    var exchangeDollar = 5.32
    var realValue = valor * exchangeDollar
    realValue = realValue

    window.alert("R$" + realValue + "  "+ nome )

}