// *Variáveis do fundo do site
const html = document.querySelector('html');
const imagem = document.querySelector('.app__image');
const texto = document.querySelector('.app__title');

// *Variáveis dos botões
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const musicaInput = document.querySelector('#alternar-musica');

// Aúdio da música
const musica = new Audio('./sons/luna-rise-part-one.mp3');
musica.loop = true;

// Active dos botões
const botoes = document.querySelectorAll('.app__card-button');

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
