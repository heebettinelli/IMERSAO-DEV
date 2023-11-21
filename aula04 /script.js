function adicionarFilme(){
    var filmeFav = document.getElementById("filme").value
    var elementListaFilmes = document.getElementById("listaFilmes")
    elementListaFilmes.innerHTML = elementListaFilmes.innerHTML + '<img src=' + filmeFav + '>'
    document.getElementById("filme").value = " "
}

// trailer capita marvel : https://www.youtube.com/watch?v=FV7AxLbHcrE

// trailer harry potter : https://www.youtube.com/watch?v=9fIObnIGMlI

// trailer one piece : https://www.youtube.com/watch?v=YC8SLpnxsL4