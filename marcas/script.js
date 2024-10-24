document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const textoModal = document.getElementById('texto-modal');
    const fechaBtn = document.querySelector('.fecha-btn');
    const body = document.body;
    

    //seleciona todos os botoes
    const buttons = document.querySelectorAll('.botao-more button');

    //adiciona um evento de click para cada botao
    buttons.forEach((button, index) => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            //personaliza o texto de acordo com o card selecionado
            switch (index) {
                case 0:
                    textoModal.innerHTML = `<h1>WARNER BROS</h1><br>
                                           <p>Descubra o universo diversificado da Warner Bros., líder global em entretenimento com um portfólio invejável de propriedades intelectuais. Desde os adorados Looney Tunes até o universo mágico de Harry Potter, cada criação oferece uma experiência inesquecível. Explore também o mundo distorcido de Rick and Morty e mergulhe no terror com franquias como "O Exorcista" e "It: A Coisa". Nossos clássicos atemporais moldaram o cenário cultural, oferecendo uma jornada única através do entretenimento. Com compromisso com qualidade e inovação, a Warner Bros. inspira uma infinidade de produtos licenciados que tornam nossas histórias favoritas parte do cotidiano global do entretenimento.</p>`;
                    break;
                case 1:
                    textoModal.innerHTML = `<h1>DC COMICS</h1><br>
                                           <p>Explore o universo diversificado da DC Comics, líder global em entretenimento com um portfólio invejável de super-heróis e equipes icônicas como Superman, Batman, Mulher-Maravilha, Liga da Justiça e Esquadrão Suicida. Com histórias que inspiram gerações, desde os quadrinhos até as telas do cinema e da televisão, a DC Comics explora o heroísmo, a justiça e desafios morais. Com um compromisso contínuo com qualidade e inovação, a DC não só cria experiências memoráveis em várias mídias, mas também inspira uma ampla gama de produtos licenciados que colocam seus personagens no centro do entretenimento global.</p>`;
                    break;
                case 2:
                    textoModal.innerHTML = `<h1>MARVEL</h1><br>
                                           <p>Explore o vasto universo da Marvel, líder global em entretenimento com um portfólio excepcional de super-heróis e equipes poderosas como Homem de Ferro, Capitão América, Thor, Vingadores e Guardiões da Galáxia. Desde os quadrinhos que inspiraram gerações até as telas do cinema e televisão, a Marvel explora temas de heroísmo, sacrifício e redenção. Com um compromisso contínuo com qualidade e inovação, a Marvel cria experiências memoráveis e inspira uma ampla variedade de produtos licenciados que conectam seus personagens ao cotidiano global do entretenimento. Explore o melhor do mundo dos super-heróis com a Marvel.</p>`;
                    break;
                case 3:
                    textoModal.innerHTML = `<h1>TURMA DA MÔNICA</h1><br>
                                           <p>Explore o universo da Turma da Mônica, um ícone brasileiro em entretenimento com personagens como Mônica, Cebolinha, Magali e Cascão, que oferecem aventuras divertidas e educativas para crianças e adultos. As histórias em quadrinhos conquistaram gerações e se expandiram para desenhos animados, filmes e uma variedade de produtos licenciados, explorando temas de amizade, diversão e valores familiares. Com um compromisso contínuo com qualidade e inovação, a Turma da Mônica cria experiências memoráveis e inspira fãs ao redor do mundo, sendo um símbolo do carisma brasileiro no entretenimento.</p>`;
                    break;
                case 4:
                    textoModal.innerHTML = `<h1>ONE PIECE</h1><br>
                                           <p>"One Piece", criado por Eiichiro Oda, é uma série de anime e mangá aclamada mundialmente por suas aventuras piratas. A história segue Monkey D. Luffy e os Piratas do Chapéu de Palha em busca do lendário tesouro, One Piece, explorando temas como amizade, coragem e justiça em um mundo de ilhas exóticas e piratas poderosos. Com mais de 1000 capítulos de mangá e episódios de anime, "One Piece" cativa fãs com seu enredo emocionante e desenvolvimento de personagens como Roronoa Zoro, Nami e Sanji. Ao longo de duas décadas, a série não só conquistou uma base de fãs dedicada, mas também inspirou uma variedade de produtos licenciados, como jogos, figuras colecionáveis e roupas. Explore o mundo épico de "One Piece" e embarque em uma aventura pelo Grande Mar.</p>`;
                    break;
                case 5:
                    textoModal.innerHTML = `<h1>DISNEY</h1><br>
                                           <p>Explore o vasto universo da Disney, líder global em entretenimento com um portfólio excepcional de propriedades intelectuais que vão desde clássicos animados como Mickey Mouse e Pato Donald até icônicas princesas como Ariel, Elsa e Moana. A Disney cativa todas as idades com filmes que exploram temas de amor, amizade e aventura, desde animações clássicas até épicos contemporâneos como "Frozen" e "O Rei Leão". Além disso, a Disney inclui universos expansivos como a Marvel, com super-heróis como Homem de Ferro, Capitão América e Thor, que inspiram milhões ao redor do mundo.
                                              Com um compromisso contínuo com qualidade e magia, a Disney cria experiências memoráveis no cinema e televisão, e inspira uma infinidade de produtos licenciados que fazem seus personagens serem amados em todo o mundo. Explore o melhor do entretenimento e da nostalgia com a Disney.</p>`;
                    break;
            }

            //mostra o modal e aplica desfoque no fundo
            modal.style.display = 'flex';
            body.classList.add('abre-modal');
        });
    });

    //fecha o modal ao clicar no botão de fechar
    fechaBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        body.classList.remove('abre-modal');
    });

    //fecha o modal quando clica fora dele
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            body.classList.remove('abre-modal');
        }
    });
});

