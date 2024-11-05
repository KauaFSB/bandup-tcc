const proximoBtn = document.getElementById('proximo-btn');
const anteriorBtn = document.getElementById('anterior-btn');
const containerWrapper = document.querySelector('.agrupa-container');
let containerAtual = 0; 

proximoBtn.addEventListener('click', () => {
      containerAtual = (containerAtual + 1) % 3;
  
  containerWrapper.style.transition = 'transform .8s ease-in-out';
  containerWrapper.style.transform = `translateX(-${containerAtual * 100}%)`;
});

anteriorBtn.addEventListener('click', () => {
  containerAtual = (containerAtual - 1 + 3) % 3;

  containerWrapper.style.transition = 'transform .8s ease-in-out';
  containerWrapper.style.transform = `translateX(-${containerAtual * 100}%)`;
});


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

