
const listaCPFs = ["12312321387", "54564654", "6545664656"];

const cliente = {
        nome: "André",
        idade: 36,
        cpf: "12312321387",
        email: "andre@gmail.com"
    };

 // ---------- ---------- ---------- ----------

 /*
    Acessar um objeto com as informações de um cliente e exibir essas informações no console.
 */

console.log(cliente.nome);
console.log(cliente.cpf.substring(0,3));

// ---------- ---------- ---------- ----------

/*
    Consultar um objeto utilizando uma lista de chaves relativas a infomrações de clientes gerada pelo
    sistema e printar o resultado na tela.
*/

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[3]]);

console.log();

chaves.forEach(info => console.log(cliente[info]));

console.log(cliente["nome"]);
console.log(cliente["conta"]);

console.log();

// ---------- ---------- ---------- ----------

console.log("Agora é com o for");


const clienteDados = [
    {
        nome: "Leo",
        idade: 37,
        email: "teste@teste.com"
    }
];

const chavesDados = ["nome", "idade", "email"];

for (let i = 0; i < chavesDados[0].length - 1; i++) {
    console.log(clienteDados[0][chavesDados[i]]);
    //console.log(clienteDados[0].email);
}
console.log("Saiu do for");
console.log();

// ---------- ---------- ---------- ----------

/*
    Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores.
*/

console.log(cliente);
cliente.fone = "965445564";
console.log(cliente);

console.log();

// ---------- ---------- ---------- ----------

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
        nome: "Saruman",
        classe: "mago"
    },
    status: "desaparecido"
};

console.log(objPersonagem);
delete objPersonagem.aliado;
console.log(objPersonagem);
console.log(objPersonagem.aliado);

delete objPersonagem["status"];

console.log(objPersonagem);
console.log(objPersonagem.status);

const delProp = delete objPersonagem.aliado;
const delPropInexistente = delete objPersonagem["endereco"];

console.log(delProp);
console.log(delPropInexistente);

console.log();

// ---------- ---------- ---------- ----------

const pessoa = {
    nome: "Bruce Banner",
    dataNascimento: "25/01/1980",
    carteiraIdentidade: "997776-X",
    email: "profbanner@email.com",
    telefone: "+55999999999999999",
    cidade: "Cachoeira de Itapemirim",
    estado: "ES"
};

/* 
    Usando a representação do objeto pessoa, foi solicitado que adicionássemos os campos seguro social
    e cpf no formato string. Além disso, quando forem exibidas as informações da pessoa em um relatório,
    deverão aparecer somente os 4 primeiros dígitos do CPF e da carteira de identidade.
*/

pessoa.seguroSocial = "56464";
pessoa.cpf = "654654564564";
console.log(pessoa.cpf.substring(0,4));
console.log(pessoa.carteiraIdentidade.substring(0,4));
//console.log(pessoa); 