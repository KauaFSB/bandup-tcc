document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-content');
    const dropdownButton = document.getElementById('dropdownButton');
    
    // Fechar o dropdown ao clicar fora
    if (!event.target.matches('.dropbtn')) {
        dropdown.classList.remove('show');
    }

    // Alternar o dropdown
    dropdownButton.addEventListener('click', function () {
        dropdown.classList.toggle('show');
    });
});

function selectOption(option) {
    const dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.textContent = option;
    document.querySelector('.dropdown-content').classList.remove('show');
}
