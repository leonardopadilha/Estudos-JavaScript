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