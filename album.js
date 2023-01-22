/*
tutorial: tableless.github.io/iniciantes/manual/js/objetos.html
*/


//Notação literal
const album = {
    title: "Metallica (Black Album)",
    released: 1991,
    showInfo: function() {
        console.log("Título do album: " + this.title + " Lançado em: " + this.released);
    }
}

// Função construtora
var album1 = new Object();
album1.title = "Metallica (Black Album)";
album1.released = 1991;
album1.showInfo = function() {
    console.log("Título do album: " + this.title + " Lançado em: " + this.released);
}

album.showInfo();
album['showInfo']();

let titulo = album['title'];
console.log(titulo);

console.log(album.title);

let novoTitulo = album.title = 'Powerslave';
let novoLancamento = album.released = 1984;
console.log(`${novoTitulo} - ${novoLancamento}`);

console.log(album);

album.title = "Metallica (Black Album)";
album.released = 1991;

//album.tracks = ["Enter Sandman", "Sad but true", "Holier Than Thou", "The Unforgiven"];

album.tracks = [
    {
        musicName: "Enter Sandman",
        released: 1992,
    },
    {
        musicName: "Sad but true",
        released: 1994,
    },
    {
        musicName: "Holier Than Thou",
        released: 1992,
    }

];

console.log("completo: " + album.tracks[1].musicName);

console.log(album1.released);

delete album1.released;
console.log(album1.released);

function discografia({title, released}) {
    return `O álbum ${title} foi lançado em ${released}`;
}

console.log(discografia(album));

const music = album.tracks.filter(chosenSong => chosenSong.released === 1992);

console.log(music); // Todos os dados

for(let i = 0; i < music.length; i++){
    console.log(music[i].musicName); // Apenas os nomes das músicas
}


const newMusic = [
    {
        newMusicName: "The Unforgiven",
        newRelease: 2007,
    },
    {
        situacaoAtual: "Atividades encerrada"
    }
];

console.log();

//spread operator
console.log("Albuns - Objeto");
let albunsObjeto = {...album.tracks[0], ...newMusic[0]};
console.log(albunsObjeto);

console.log();

//spread operator
console.log("Albuns - Array");
let albunsArray = [...album.tracks, ...newMusic];
console.log(albunsArray);

console.log();

let x = Math.round(1.6546544548);
//console.log(x);