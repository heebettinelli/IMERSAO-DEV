var listaFilmes = []

function adicionarFilme(){
    var filmeFav = document.getElementById("filme").value
    var trailerFilme = document.getElementById("trailer").value
    var nomeFilme = document.getElementById("nome").value
    var elementListaFilmes = document.getElementById("listaFilmes")

    if(filmeFav.endsWith(".jpg") || filmeFav.endsWith(".jpeg")){
        listaFilmes.push({
            nome: nomeFilme,
            imagem: filmeFav,
            trailer: trailerFilme
        })
        carregarFilmes()
        document.getElementById("filme").value = ""
        document.getElementById("trailer").value = ""
        document.getElementById("nome").value = ""
    } else {
        alert("Ecolha um formato de imagem que termine com .jpg ou .jpeg")
    }
}

function carregarFilmes(){
    var elementListaFilmes = document.getElementById("listaFilmes")
    elementListaFilmes.innerHTML = ""

    listaFilmes.forEach((filme) => {
        elementListaFilmes.innerHTML += `<div>
            <img src="${filme.imagem}" alt="${filme.nome}">
            <p>${filme.nome}</p>
            <button><a href="${filme.trailer}" target="_blank">Assistir Trailer</a></button>
        </div>`;
    });
}