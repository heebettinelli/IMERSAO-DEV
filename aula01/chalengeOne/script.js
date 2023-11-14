function conversorBtc() {
    var soma = window.prompt("Quantos BTC quer converter?")
    window.prompt = exchangeBtc
    var exchangeBtc = 181859.37
    var realValue = soma * exchangeBtc
    realValue.toFixed(2)

    window.alert("R$" + realValue)

}