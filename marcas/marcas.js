const proximoBtn = document.getElementById('proximo-btn');
const anteriorBtn = document.getElementById('anterior-btn');
const containerWrapper = document.querySelector('.agrupa-container');
let containerAtual = 0; 

proximoBtn.addEventListener('click', () => {
      containerAtual = (containerAtual + 1) % 3;
  
  containerWrapper.style.transition = 'transform 0.5s ease-in-out';
  containerWrapper.style.transform = `translateX(-${containerAtual * 100}%)`;
});

anteriorBtn.addEventListener('click', () => {
  containerAtual = (containerAtual - 1 + 3) % 3;

  containerWrapper.style.transition = 'transform 0.5s ease-in-out';
  containerWrapper.style.transform = `translateX(-${containerAtual * 100}%)`;
});

const banner = document.querySelector('.banner');

window.addEventListener('scroll', () => {
  const posicaoScroll = window.scrollY;

  const minScale = 0.5;
  const maxScale = 1;

  const valorEscala = Math.max(minScale, maxScale - posicaoScroll / 3000);

  banner.style.transform = `scale(${valorEscala})`;
});