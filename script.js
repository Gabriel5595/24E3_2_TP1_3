//TP 1.3
//Desenvolva uma função chamada calcularMediaAvaliacoes que receba um array de números representando avaliações de um produto e retorne a média das avaliações. Utilize os métodos reduce e length para calcular a média.

function calcularMediaAvaliacoes(avaliacoes) {
    if (avaliacoes.length === 0) return 0;

    var somaAvaliacoes = avaliacoes.reduce(function(acumulador, avaliacao) {
        return acumulador + avaliacao;
    }, 0);

    var media = somaAvaliacoes / avaliacoes.length;

    return media;
}

var avaliacoes = [4, 5, 3, 4, 5];
var media = calcularMediaAvaliacoes(avaliacoes);
console.log("Média = " + media);