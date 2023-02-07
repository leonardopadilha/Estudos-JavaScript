const alunos = [
    {nome: 'João', idade: 15},
    {nome: 'José', idade: 18},
    {nome: 'Maria', idade: 20},
    {nome: 'Carlos', idade: 21}
];

const alunoMaior = [];

alunos.forEach(function(aluno) {
    if (aluno.idade >= 18){
        alunoMaior.push(aluno)
    }
});

console.log(alunoMaior)

console.log()

// --------------------- ---------------------------- ---------------------------

const	alunosDeMaior	=	[];
for(let	i =	0;	i <	alunos.length; i++)	{
    if(alunos[i].idade >= 18)	{
        alunosDeMaior.push(alunos[i]);
    }
};

console.log(alunosDeMaior)

console.log()

// --------------------- ---------------------------- ---------------------------

const alunosDeMaiorFilter = alunos.filter(function(aluno) {
    return aluno.idade >= 20;
});

console.log(alunosDeMaiorFilter)

console.log()

// --------------------- ---------------------------- ---------------------------

const maior_idade = alunos.filter(maior => maior.idade > 18);
console.log(maior_idade[0].nome)
console.log(maior_idade)

const sobrenome = " Silva";

//spread operator
const nomeCompleto = [...maior_idade[0].nome, ...sobrenome]
console.log(nomeCompleto.join(''))