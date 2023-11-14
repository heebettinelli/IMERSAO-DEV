var numeroSecreto = parseInt(Math.random() * 1001)

while (chute != numeroSecreto){
    var chute = prompt("Digite um número de 0 a 1000")

    if(chute == numeroSecreto){
        window.alert("Acertou!")
    }
    else if(chute > numeroSecreto){
        window.alert("Errou! O número secreto é menor")
    }
    else if (chute < numeroSecreto){
        window.alert("Errou! o número é maior")
    }
}
