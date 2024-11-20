const textos = ["Warner Bros?", "DC Comics?", "Cartoon Network?", "HBO?", "Harry Potter?", "Mônica?", "Fresno?"];
const mudaTextoElement = document.querySelector('.muda-texto');
let index = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100; 
let pauseBetweenTexts = 1500; 

function typeEffect() {
    const currentText = textos[index];

    if (isDeleting) {
        mudaTextoElement.textContent = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % textos.length;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(typeEffect, typingSpeed / 2);
        }
    } else {
        mudaTextoElement.textContent = currentText.substring(0, charIndex++);
        if (charIndex > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseBetweenTexts);
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    }
}

typeEffect();

document.addEventListener("DOMContentLoaded", () => {
    const logos = document.querySelectorAll('.logo');
    logos.forEach((logo, index) => {
        logo.style.animationDelay = `${index * 0.2}s`;
    });
});


