const banner = document.querySelector('.banner');

window.addEventListener('scroll', () => {
    const posicaoScroll = window.scrollY;
    const minScale = 0.5;
    const maxScale = 1;
    const maxBorderRadius = 100;
    const valorEscala = Math.max(minScale, maxScale - posicaoScroll / 3000);
    const valorBorderRadius = Math.min(maxBorderRadius, (posicaoScroll / 60));

    banner.style.transform = `scale(${valorEscala})`;
    banner.style.borderRadius = `${valorBorderRadius}px`;
});

const proximoBtn = document.getElementById('proximo-btn');
const anteriorBtn = document.getElementById('anterior-btn');
const containerWrapper = document.querySelector('.cards-container-wrapper');
const totalContainers = containerWrapper.children.length - 2; 
let containerAtual = 0; 

function calculaLarguraTotalDoCard() {
    const card = containerWrapper.children[0]; 
    const cardStyle = window.getComputedStyle(card);
    const cardWidth = card.offsetWidth; 
    const cardMarginRight = parseFloat(cardStyle.margin); 

    return cardWidth + cardMarginRight * 2; 
}

function atualizarBotoes() {
  if (containerAtual === 0) {
      anteriorBtn.disabled = true;
      anteriorBtn.style.opacity=.5;
  } else {
      anteriorBtn.disabled = false;
      anteriorBtn.style.opacity=1;
  }

  if (containerAtual === totalContainers - 1) {
      proximoBtn.disabled = true;
      proximoBtn.style.opacity=.5;
  } else {
      proximoBtn.disabled = false;
      proximoBtn.style.opacity=1;
  }
}

proximoBtn.addEventListener('click', () => {
    const larguraTotalDoCard = calculaLarguraTotalDoCard();

    if (containerAtual < totalContainers - 1) {
        containerAtual += 1;
    } else {
        containerAtual = 0;
    }

    containerWrapper.style.transform = `translateX(-${containerAtual * larguraTotalDoCard}px)`;
    atualizarBotoes();
});

anteriorBtn.addEventListener('click', () => {
    const larguraTotalDoCard = calculaLarguraTotalDoCard();

    if (containerAtual > 0) {
        containerAtual -= 1;
    } else {
        containerAtual = totalContainers - 1; 
    }

    containerWrapper.style.transform = `translateX(-${containerAtual * larguraTotalDoCard}px)`;
    atualizarBotoes();
});

atualizarBotoes();

const modal = document.getElementById('modal');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.modal .close');

function openModal(content) {
    modalText.textContent = content; 
    modal.classList.add('active');
    modalBackdrop.classList.add('active');
    document.body.classList.add('modal-active');
}

function closeModal() {
    modal.classList.remove('active');
    modalBackdrop.classList.remove('active');
    document.body.classList.remove('modal-active');
}

document.querySelectorAll('.maisInfo-btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const content = btn.getAttribute('data-modal-content') || `Conteúdo do modal para o card ${index + 1}`;
        openModal(content);
    });
});

closeBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

