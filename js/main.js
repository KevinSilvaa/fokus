// *Variáveis do fundo do site
const html = document.querySelector('html');
const imagem = document.querySelector('.app__image');
const texto = document.querySelector('.app__title');

// *Variáveis dos botões
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const musicaInput = document.querySelector('#alternar-musica');
const startPauseBtn = document.querySelector('#start-pause');

// Aúdio da música
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

// Active dos botões
const botoes = document.querySelectorAll('.app__card-button');

// *Temporizador
let tempoDecorridoSegundos = 5;
let intervaloId = null;
const tempoFinalizado = new Audio('./sons/beep.mp3');
const tempoIniciado = new Audio('./sons/play.wav');
const tempoPausado = new Audio('./sons/pause.mp3');

// *Botões
focoBtn.addEventListener('click', () => {
    alterarFundo('foco');
    focoBtn.classList.add('active');
})

curtoBtn.addEventListener('click', () => {
    alterarFundo('descanso-curto');
    curtoBtn.classList.add('active');
})

longoBtn.addEventListener('click', () => {
    alterarFundo('descanso-longo');
    longoBtn.classList.add('active');
})

musicaInput.addEventListener('change', () => {
    if (musica.paused){
        musica.play();
        musica.volume = 0.2;
    } else {
        musica.pause();
    }
})

// *Arrow function para trocar a imagem, o fundo e remover classes do active
const alterarFundo = (contexto, conteudo) => {
    html.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `./imagens/${contexto}.png`)
    botoes.forEach(function (contexto){
        contexto.classList.remove('active')
    });
    // Troca dos textos
    switch (contexto) {
        case "foco":
            texto.innerHTML = `
            Otimize sua produtividade, <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            texto.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            texto.innerHTML = `
            Hora de voltar à superfície. <strong class="app__title-strong">faça uma pausa longa.</strong>
            `
        default:
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoDecorridoSegundos <= 0) {
        zerar();
        alert('Tempo finalizado')
        return;
    }
    tempoDecorridoSegundos -= 1;
    console.log('Temporizador: ' + tempoDecorridoSegundos);
}

startPauseBtn.addEventListener('click', iniciarPausarContagem);

function iniciarPausarContagem () {
    if (intervaloId) {
        tempoPausado.play();
        zerar();
        return;
    }
    tempoIniciado.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function zerar() {
    tempoFinalizado.play();
    clearInterval(intervaloId);
    intervaloId = null;
}

