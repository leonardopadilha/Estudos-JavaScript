const numeros = [1,2,3]
const dobro = []

for (let i = 0; i < numeros.length; i++) {
    dobro.push(numeros[i] * 2)
}

console.log(numeros)
console.log(dobro)

const dobro_map = numeros.map(function(numero) {
    return numero * 2;
})

console.log(dobro_map)
//console.log(numeros.length)

const novoArray = numeros.map(item => item * 4);
console.log(novoArray);