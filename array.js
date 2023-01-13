const nomes = [{id: 1, nome: "Outro nome"}, {id: 2, nome: "Leonardo"}];
const nomes_outros = ["id", 1, "nome", "Leonardo"];

let index = nomes_outros.indexOf("Leonardo");
console.log(nomes_outros[index]);

console.log();


const valor = retornaDadosNome("Leonardo");
console.log(nomes[valor])


function retornaDadosNome(nome_pessoa) {
    return nomes.findIndex(nome_procurado => nome_procurado.nome === nome_pessoa);
}