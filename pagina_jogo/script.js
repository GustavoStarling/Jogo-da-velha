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

let contas = [{
    nome: "teste1",
    senha: "qogbvoiadb",
    nVitorias: 0, 
    nPartidas: 0
},
{
    nome: "teste2",
    senha: "apsifnapvdkp",
    nVitorias: 0, 
    nPartidas: 0
}]

let contasLidas;
contasLidas = JSON.parse(localStorage.getItem("contas"));

if (contasLidas != null) {
    contas = contasLidas
}
else {
    contas = [{
        nome: "teste1",
        senha: "qogbvoiadb",
        nVitorias: 0, 
        nPartidas: 0
    },
    {
        nome: "teste2",
        senha: "apsifnapvdkp",
        nVitorias: 0, 
        nPartidas: 0
    }]
}

for (let item of posEl) {
    item.addEventListener("click", function() {
         if (getComputedStyle(item).cursor != "not-allowed") {
            if (count % 2 == 0)     item.classList.add("x");
            else                    item.classList.add("o");

            count++;

            (count % 2) ? checkVitoria("x") : checkVitoria("o");
         }
    });
}

function checkVitoria(jogador) {
    let vitoria = seqVitoria.some((sequencia) => {
        return sequencia.every((indice) => {
            return posEl[indice].classList.contains(jogador);
        })
    })

    if (vitoria) {
        count = 0;
        document.getElementById("vitoria").style.display = "flex";
        textoVitoriaEl.innerHTML = `${jogador.toUpperCase()} venceu!`;
        let contaLogada = localStorage.getItem("conta-logada");

        let tam = contas.length;

        for (let i=0; i<tam; i++) {
            if (contas[i].nome == contaLogada) {
                contas[i].nVitorias++;
                contas[i].nPartidas++;
                qs(contas);
            }
        };
        localStorage.setItem("contas", JSON.stringify(contas));
    }

    if (count == 9 && !vitoria) {
        count = 0;
        document.getElementById("vitoria").style.display = "flex";
        textoVitoriaEl.innerHTML = `Empate!`;
        let contaLogada = localStorage.getItem("conta-logada");

        let tam = contas.length;

        for (let i=0; i<tam; i++) {
            if (contas[i].nome == contaLogada) {
                contas[i].nPartidas++;
            }
        }
        localStorage.setItem("contas", JSON.stringify(contas));
    }

    return;
}
btnVitoriaEL.addEventListener("click", function() {
    clearBoard();
});

function clearBoard() {
    document.getElementById("vitoria").style.display = "none";

    for (let item of posEl) {
        item.classList.remove("x");
        item.classList.remove("o");
    }
}
criarconta.addEventListener("click", function(){
    let nomeinput = document.querySelector("#nome").value; 
    let senhainput = document.querySelector("#senha").value; 

    if(nomeinput.length < 1 || senhainput.length < 8) {
        alert("Nome/Senha Inválidos ou Não Preenchidos");
        return;
    };

    let tam = contas.length;

    for (let i=0; i<tam; i++) {
        if(nomeinput == contas[i].nome) { 
            alert("Nome Já Reservado");
            return;
        }
    }
    let contaNova = {nome: nomeinput, senha: senhainput, nVitorias: 0, nPartidas: 0};
    contas.push(contaNova);

    localStorage.setItem("contas", JSON.stringify(contas));

    alert("Conta registrada com sucesso!");
}); 
