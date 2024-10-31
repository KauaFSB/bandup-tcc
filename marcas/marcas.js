const nextBtn = document.getElementById('next-btn');
const containerWrapper = document.querySelector('.agrupa-container');
let currentContainer = 0; 

nextBtn.addEventListener('click', () => {
      currentContainer = (currentContainer + 1) % 3;
  
  containerWrapper.style.transition = 'transform 0.5s ease-in-out';
  containerWrapper.style.transform = `translateX(-${currentContainer * 100}%)`;
});

