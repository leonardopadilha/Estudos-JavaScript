const numeros = [1,2,3,4,5];
let soma = 0;
let soma_foreach = 0;

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);

numeros.forEach(function(soma_numeros) {
    soma_foreach += soma_numeros;
});

console.log(soma_foreach);

let soma_reduce = numeros.reduce(function(soma_numero, numero) {
    //console.log(soma_numero + " ****")
    //console.log(numero + "//")
    return soma_numero + numero;
});

console.log(soma_reduce);

console.log();

const alunos = [
    {nome:'joão', idade: 10},
    {nome:'josé', idade: 20},
    {nome:'marcos', idade: 30}
];

const nomes = alunos.reduce(function(arrayNomes, aluno) {
    //console.log(arrayNomes + "****")
    //console.log(aluno.nome + "///")
    arrayNomes.push(aluno.nome);
    //console.log(arrayNomes + "------")
    return arrayNomes;
}, [])

console.log(nomes);