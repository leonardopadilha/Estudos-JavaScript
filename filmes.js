const filmes = [
    {
        id: 1,
        filme: "O Hobbit: A batalha dos cinco exércitos",
        ano: 2014,
        disponibilidade: "Prime Video"
    },
    {
        id: 2,
        filme: "O Hobbit: Uma jornada inesperada",
        ano: 2012,
        disponibilidade: "Prime Video"
    },
    {
        id: 3,
        filme: "O Hobbit: A desolação de Smaug",
        ano: 2013,
        disponibilidade: "Prime Video"
    },
    {
        id: 4,
        filme: "Rocky IV",
        ano: 1985,
        disponibilidade: "Prime Video"
    },
    {
        id: 5,
        filme: "Rocky V",
        ano: 1990,
        disponibilidade: "Prime Video"
    },
    {
        id: 6,
        filme: "Rocky III",
        ano: 1982,
        disponibilidade: "Prime Video"
    },
    {
        id: 7,
        filme: "Rocky",
        ano: 1979,
        disponibilidade: "Prime Video"
    },
    {
        id: 8,
        filme: "Rocky Balboa",
        ano: 2006,
        disponibilidade: "Prime Video"
    },
    {
        id: 9,
        filme: "Rocky um lutador",
        ano: 1976,
        disponibilidade: "Prime Video"
    },
    {
        id: 10,
        filme: "Sherek",
        ano: 2001,
        disponibilidade: "Prime Video"
    }
];

//console.log(filmes);

// Convertendo o objeto em JSON
const filmesJSON = JSON.stringify(filmes);
console.log("json" + filmesJSON);

let filmeNovo = 0;
for (let atual = 0; atual < filmes.length; atual++) {
    if (filmes[atual].ano < filmes[filmeNovo].ano) {
        filmeNovo = atual;
    }
}

console.log(`Ano de lançamento: ${filmes[filmeNovo].ano}, 
Filme: ${filmes[filmeNovo].filme}`);

// ---------- ---------- ---------- ---------- ---------- ---------- ----------

console.log();

 function ordenarFilmes(lista, posicaoInicial) {
    let filmeNovo = posicaoInicial;

    for (let atual = posicaoInicial; atual < lista.length; atual++) {
        if (lista[atual].ano < lista[filmeNovo].ano) {
            filmeNovo = atual;
        }
    }
    return filmeNovo;
 }

 // Selection Sort
 for (let atual = 0; atual < filmes.length; atual++) {
    let menor = ordenarFilmes(filmes, atual);

    let filmeAtual = filmes[atual];
    let filmeMaisNovo = filmes[menor];

    filmes[atual] = filmeMaisNovo;
    filmes[menor] = filmeAtual;
 }

 console.log(filmes);


 // Insertion Sort
 function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;
        while(analise > 0 && lista[analise].ano < lista[analise - 1].ano) {
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];

            lista[analise] = itemAnterior;
            lista[analise] = itemAnalise;

            analise--;
        }
    }
    console.log(lista);
 }

 insertionSort(filmes);


 // ---------- ---------- ---------- ---------- ---------- ---------- ----------


const rocky = filmes.filter(filmes_rocky => filmes_rocky.filme === "Rocky");
console.log(`filmes: ${rocky[0].id} - ${rocky[0].filme}`);

//console.log(filmes.length)
