document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-content');
    const dropdownButton = document.getElementById('dropdownButton');

    if (!dropdown.contains(event.target) && !dropdownButton.contains(event.target)) {
        dropdown.classList.remove('show');
        document.body.classList.remove('no-scroll');
    }

    dropdownButton.addEventListener('click', function () {
        dropdown.classList.toggle('show');
        document.body.classList.toggle('no-scroll');
    });
});

function selectOption(option) {
    const dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.textContent = option;
    document.querySelector('.dropdown-content').classList.remove('show');
    document.body.classList.remove('no-scroll');
}




document.addEventListener("DOMContentLoaded", () => {
    const jumpSequenceElement = document.querySelector(".jump-sequence");
    if (jumpSequenceElement) {
        const text = jumpSequenceElement.textContent;
        jumpSequenceElement.textContent = ""; 

        text.split("").forEach((char, index) => {
            const span = document.createElement("span");
            span.textContent = char;
            span.style.setProperty("--i", index); 
            jumpSequenceElement.appendChild(span);
        });
    }
});
