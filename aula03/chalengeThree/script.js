// //Declaração de Arrays para img e titulo dos filmes
// var listaFilme = [];
// var listaNomeFilme = [];
// //Varialvel para selecionar o botão no HTML
// var adicionaFilmes = document.getElementById("adicionarFilme");
// //Evento criado para o botão adicionar a imagem e titulo dos filmes
// adicionaFilmes.addEventListener("click", function(){
//     var urlFilme = prompt("Digite a URL da imagem do filme");
//     var nomeFilme = prompt("Digite o nome do filme:");
//     listaFilme.push(urlFilme);
//     listaNomeFilme.push(nomeFilme);

//     var listaFilmesElement = document.getElementById("listaFilmes");
//     //limpa o conteudo anterior
//     listaFilmesElement.innerHTML = "";
  
//   //Condicional para percorrer as listas
//     for (var i=0; i < listaFilme.length; i++){
//       //variavel que cria elemento DIV no HTML dinamicamente
//       var filmeElement = document.createElement("div");
//       filmeElement.classList.add("filme");
//       //variavel que cria elemento IMG no HTML dinamicamente
//       var imagemElement = document.createElement("img");
//       //atribui a URL para element img no HTML
//       imagemElement.src = listaFilme[i]; 
//       //variavel que cria elemento <p> no HTML dinamicamente
//       var nomeFilmeElement = document.createElement("p");
//       ////atribui os titulos para element <p> no HTML
//       nomeFilmeElement.textContent = listaNomeFilme[i];
//       //Atribui como filho os elementos de imagem e texto para elemento <div> criado para concatenar texto e imagem
//       filmeElement.appendChild(imagemElement);
//       filmeElement.appendChild(nomeFilmeElement);
//       //Atribui o <div> dinamico ao <div> criado no HTML para mostrar o resultado na tela.
//       listaFilmesElement.appendChild(filmeElement);
    
//    }
// });
// var listaNome = []
// var listaFilmes = []
// var adicionaFilmes = document.getElementById("#urlFilme")
// var res = document.getElementById("#adicionarFilme")
// function adicionarFilme(res){
//   if(adicionarFilme.length > 0){ 
//     var listaFilmes = document.getElementById("#listaFilmes")
  
//   } else{
//     alert("ERRO! Por favor verifique se a URL é válida.")
//   }
    
// }

var listaFilmes = [];

var adicionarFilmes = document.getElementById("adicionarFilme");

adicionarFilmes.addEventListener("click", function(){
    var urlFilme = prompt("Digite a URL da imagem do filme");
    var nomeDoFilme = prompt("Digite o nome do filme:");

    listaFilmes.push({ url: urlFilme, nome: nomeDoFilme });

    // Adicionar elementos à lista na página
    var listaFilmesElement = document.getElementById("listaFilmes");
    var novoElemento = document.createElement("div");
    novoElemento.innerHTML = `<img src="${urlFilme}" alt="${nomeDoFilme}"><p>${nomeDoFilme}</p>`;
    listaFilmesElement.appendChild(novoElemento);
});
 
