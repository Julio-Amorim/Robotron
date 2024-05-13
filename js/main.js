//botões de somar e subtrair
const controle = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]');
const imagemRobo = document.querySelector('#imgRobotron');

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca);
    });
});

function manipulaDados(opercao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if (opercao === "+") {
        peca.value = parseInt(peca.value) + 1
    } else if (opercao === "-") {
        if (peca.value > 0) {
            peca.value = parseInt(peca.value) - 1
        }
    }
}

function atualizaEstatisticas(peca){
    estatisticas.forEach((elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

let imagens = ['./img/robotronAmarelo.png', './img/robotronVermelho.png', './img/robotronPreto.png', './img/robotronRosa.png'];
let i = 0;

imagemRobo.addEventListener('click', () => {
    imagemRobo.src = imagens[i];
    i = (i + 1) % imagens.length;
});