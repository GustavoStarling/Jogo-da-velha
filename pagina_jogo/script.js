let posEl = document.querySelectorAll(".pos");
let textoVitoriaEl = document.querySelector("#texto-vitoria");
let btnVitoriaEL = document.querySelector("#btn-vitoria");
let botao = document.querySelector("#botao-jogar");
let criarconta = document.querySelector("#botao-criar");
let linkCredLog = document.querySelector("#botao-creditos");
let linkCredVit = document.querySelector("#btn-creditos");
let voltarLog = document.querySelector("#btn-retorno");
let btnRanking = document.querySelector("#botao-ranking");
let crpTabela = document.querySelector("#corpo-tabela");
let btnVoltarRank = document.querySelector("#btn-rank-voltar");

let count = 0;

let seqVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    [0, 4, 8],
    [6, 4, 2],

    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

