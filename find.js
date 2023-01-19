const alunos = [
    {nome: 'joão'},
    {nome: 'josé'},
    {nome: 'maria'}
];

const aluno = [];
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].nome === "josé") {
        aluno.push(alunos[i].nome);
        break;
    };
};

console.log(aluno)
 
console.log();

const aluno_encontrado = alunos.find(function(aluno_pesquisado) {
    return aluno_pesquisado.nome === "josé";
});

console.log(aluno_encontrado);

