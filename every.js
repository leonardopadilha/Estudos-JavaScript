const alunos = [
    {nome: 'joão', idade: 18},
    {nome: 'maria', idade: 20},
    {nome: 'pedro', idade: 24}
];

let todosAlunosDeMaior = true;
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].idade < 19) {
        todosAlunosDeMaior = false;
    }
}

console.log(todosAlunosDeMaior);

// Every verifica se todos os elementos atendem a condição
let todosAlunosDeMaiorEvery = alunos.every(function(maior_idade) {
    return maior_idade.idade >= 18;
});

console.log(todosAlunosDeMaiorEvery);
