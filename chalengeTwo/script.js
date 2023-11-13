function conversorPersonalizado() {
    var dollarValue = 64
    var exchangeDollar = 5.32
    var realValue = dollarValue * exchangeDollar
    realValue = realValue.toFixed(2)

    alert("R$" + realValue)

}