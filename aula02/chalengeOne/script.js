function comecar() {
    var numeroSecreto = parseInt(Math.random() * 1001)
    var contador = 0
    var tentativas = 10

    window.alert("Será que você descobre o número secreto?")

    while (chute !== numeroSecreto){

    contador = contador + 1 
    var chute = prompt("Digite um número de 0 a 1000, você terá" + " " + tentativas + " " + "tentativas")

    if(chute == numeroSecreto){
    window.alert("Acertou!")
    break
}
    else if(chute > numeroSecreto){
    window.alert("Errou! O número secreto é menor, o numero de tentativas até o momento é" + " " + contador)
}
    else if (chute < numeroSecreto){
    window.alert("Errou! o número é maior, o numero de tentativas até o momento é" + " " + contador)
    }

    if (contador == tentativas){
        window.alert("Sinto muito, você esgotou suas tentativas. O numero secreto era" + numeroSecreto)
        break
    }
}

}