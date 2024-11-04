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
  const maxBorderRadius = 100; // Alterado para um arredondamento máximo de 100px

  // Calcula o valor da escala
  const valorEscala = Math.max(minScale, maxScale - posicaoScroll / 3000);

  // Calcula o valor do border-radius, variando até o novo limite de 100px
  const valorBorderRadius = Math.min(maxBorderRadius, (posicaoScroll / 60));

  // Aplica os estilos transform e border-radius
  banner.style.transform = `scale(${valorEscala})`;
  banner.style.borderRadius = `${valorBorderRadius}px`;
});
