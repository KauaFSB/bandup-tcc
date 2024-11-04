document.addEventListener('click', function (event) {
    const dropdown = document.querySelector('.dropdown-content');
    const dropdownButton = document.getElementById('dropdownButton');
    
    if (!event.target.matches('.dropbtn')) {
        dropdown.classList.remove('show');
    }

    dropdownButton.addEventListener('click', function () {
        dropdown.classList.toggle('show');
    });
});

function selectOption(option) {
    const dropdownButton = document.getElementById('dropdownButton');
    dropdownButton.textContent = option;
    document.querySelector('.dropdown-content').classList.remove('show');
}



document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario');
    const nomeInput = document.getElementById('name');
    const celularInput = document.getElementById('number');
    const mensagemErro = document.getElementById('mensagemErro');

    formulario.addEventListener('submit', (event) => {
        let mensagem = "";

        // Verifica se o nome tem mais de 6 caracteres
        if (nomeInput.value.length <= 6) {
            mensagem += "O nome deve ter mais de 6 caracteres.<br>";
        }

        // Verifica se o celular tem exatamente 10 caracteres
        if (celularInput.value.length !== 10) {
            mensagem += "O celular deve ter exatamente 10 caracteres.<br>";
        }

        // Se houver mensagens de erro, cancela o envio e exibe o erro
        if (mensagem) {
            event.preventDefault();
            mensagemErro.innerHTML = mensagem;
            mensagemErro.style.display = 'block';
        } else {
            mensagemErro.style.display = 'none'; // Oculta a mensagem de erro se a validação for bem-sucedida
        }
    });
});
