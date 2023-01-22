const pesoDasMalas = [12,32,21,29];
let temMalaAcimaDoPeso = false;

for (let i = 0; i < pesoDasMalas.length; i++) {
    if (pesoDasMalas[i] > 30) {
        temMalaAcimaDoPeso = true;
    }
}

console.log(temMalaAcimaDoPeso);

const temMalaAcimaDoPesoSome = pesoDasMalas.some(function(pesoDaMala) {
    return pesoDaMala > 30;
})

console.log(temMalaAcimaDoPeso);