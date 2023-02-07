let palavra = "ovo";
let palavraInvertida = "";
let resposta = "";

if (palavra[0] !== palavra[palavra.length - 1]) {
    resposta = `${palavra} não é um palíndromo`;
} else {
    for (let i = palavra.length - 1; i >= 0; i--){
        palavraInvertida += palavra[i];
    }
    resposta = palavra === palavraInvertida ? `${palavra} é um palíndromo` : 
                                              `${palavra} não é um palíndromo`;
}
console.log(resposta);