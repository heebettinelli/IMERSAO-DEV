var cartazes = ["https://upload.wikimedia.org/wikipedia/pt/c/c1/Twilight_Poster.jpg", "https://upload.wikimedia.org/wikipedia/pt/1/1d/Harry_Potter_Pedra_Filosofal_2001.jpg", "https://static.wikia.nocookie.net/vozesportuguesas/images/4/45/Totoro.png/revision/latest?cb=20201012184332&path-prefix=pt", "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg", "https://pics.filmaffinity.com/One_Piece_TV_Series-985097858-large.jpg", "https://br.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg"  
 ]

var nomes = [
 "Crepúsculo", "Harry Potter", "Totoro", "Friends", "One Piece", "The Office"
]



var i = 0
var b = 0
while (i < cartazes.length && b < nomes.length) {
  document.write('<h4>' + nomes[b] + '</h4>')
  document.write("<img src=" + cartazes[i] + ">")
  i++
  b++
}



// for (var i = 0; i < cartazes.length; i++) {
//     document.write("<img src=" + cartazes[i] + ">")
//  }

