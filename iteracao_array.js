// Iteração de um array utilizando o for tradicional

const frutas = ['abacaxi', 'maça', 'uva'];

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
};

// ===================== ===================== =====================

console.log();

// Iteração de um array utilizando o foreach

frutas.forEach(function(frutas_array) {
    console.log(frutas_array)
});

// ===================== ===================== =====================

console.log();

function imprimeNomesFrutas(nomes_frutas) {
    console.log(nomes_frutas)
}

frutas.forEach(imprimeNomesFrutas)

// ===================== ===================== =====================

console.log();

/*
os elementos processados pelo forEach são determinados antes da primeira
invocação da função	de callback. Isso significa	que	os elementos que	 
forem adicionados depois da chamada do método não serão vistos. 

Entretanto,	isso não quer dizer que os valores não foram
adicionados	à lista. Ao	adicionar um segundo console.log ao	final 
do código para exibir a lista.
*/

frutas.forEach(function(fruta) {
    frutas.push("laranja")
    console.log(fruta)
})

console.log(frutas)

// ===================== ===================== =====================

console.log();

//Altere o código a seguir para utilizar o método forEach de modo que a saída permaneça a mesma.

var numeros = [0,1,2,3,4,5];
for(var i = 0; i < numeros.length; i++) {
    if(i % 2 === 0) {
        console.log(i + ' é par');
    } else {
        console.log(i + ' é ímpar');
    }
}

// saída:
// 0 é par
// 1 é ímpar
// 2 é par
// 3 é ímpar
// 4 é par
// 5 é ímpar

console.log()

numeros.forEach(function(tipo_numeros) {
    const resposta = tipo_numeros % 2 === 0 ? `${tipo_numeros} é par` : `${tipo_numeros} é impar` 
    console.log(resposta)
})