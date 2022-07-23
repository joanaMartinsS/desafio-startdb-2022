const readline = require('readline-sync');
const Forca = require('./forca');

const jogo = new Forca('abacaxi'); // * Criação do objeto abacaxi que pertence a classe força

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    const chute = readline.question("Aguardando chute: \n"); //* O usuário escreve o chute e ele é armazenado na const chute
    jogo.chutar(chute); // * O método chutar é chamado passando a const chute como parâmetro


    console.log(jogo.buscarDadosDoJogo()); // * Depois que a pessoa chutar tem que mostrar os dados
}

console.log("você " + jogo.buscarEstado());
