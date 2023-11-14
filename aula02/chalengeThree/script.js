function comecar() {
    var numeroSecreto = parseInt(Math.random() * 1001)
    var contador = 0
    var tentativas = 10
    var chute
    window.alert("Será que você descobre o número secreto?")

    while (chute !== numeroSecreto){

    contador = contador + 1 
    var chute = prompt("Digite um número de 0 a 1000, você terá" + " " + tentativas + " " + "tentativas")

    if(length == 0 ){ //nao é lenght nem prompt, qual outro posso usar?
        window.alert("Por favor, considere um número acima de 0")
        break
    }

    if(chute == numeroSecreto){
    window.alert("Acertou!")
    break
}
    else if(chute > numeroSecreto){
    window.alert("Errou! O número secreto é menor que"+ " " + chute + " " + "você ja usou" + " " + contador + " " + "tentativas")
}
    else if (chute < numeroSecreto){
    window.alert("Errou! o número é maior que"+ " " + chute + " " + "você já usou" + " " + contador + " " + "tentativas")
    }

    if (contador == tentativas){
        window.alert("Sinto muito, você esgotou suas tentativas. O número secreto era"+ " " + numeroSecreto)
        break
    }
}

}

// preciso poder cancelar a qualquer momento, como interromper o looping ao clicar em cancelar no alert?

//  fazer com q o 0 não conte. so vale a partir de 1 