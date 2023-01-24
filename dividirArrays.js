// Método slice, splice e concat

const nomes = ["João", "Juliana", "Lara", "Guilherme"];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);


// ---------- ---------- ----------

// Retirar: Ana e Caio mas incluir o Rodrigo

const listaDeChamada = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];
listaDeChamada.splice(1, 2, "Rodrigo");

// Adicionar nomes sem excluir -> Entre a Ana e Caio será incluído o Rodrigo
listaDeChamada.splice(2, 0, "Rodrigo");

// ---------- Juntando Turmas ----------

const salaDePython = ["Melissa", "Helena", "Rodrigo"];
const salaDeJavaScript = ["Ju", "Leo", "Raquel"];

const salasUnificadas = salaDePython.concat(salaDeJavaScript);

// ---------- ---------- ----------

/*
    -- Crie uma lista com os seguintes alunos e alunas: João, Juliana, Caio e Ana.
    -- Crie uma lista com as seguintes médias: 10, 8, 7.5, 9.
    -- Crie uma lista com 2 dimensões com os nomes e as médias
*/

const alunos = ['João', 'Juliana', 'Caio', 'Ana', 'Silva'];
const mediaDosAlunos = [10, 8, 7.5, 9];

let listaDeNotasEAlunos = [alunos, mediaDosAlunos];

console.log(`O aluno ${listaDeChamada[0][0]} tem a média de ${listaDeChamada[1][0]}`);

for (let i = 0; i < listaDeNotasEAlunos.length; i++){
    for (let j = 0; j < listaDeNotasEAlunos[i].length; j++) {
        console.log(listaDeNotasEAlunos[i][j])
    }
}