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



// desafio 1 - errou, esse numero é maior/menor do que.../  concatenacao de string, usar outro alert p avisar quantos chutes ja dei var numerodechutes = a cada iteração (laço) while valha ela mesma +1 ou seja ++ incrementar

// numero entre 1 e 1000 de forma que o 0 nao apareça

// qual é o numero maximo de tentativas que eu tenho que ter maximo pra acertar (dividir em 4 )