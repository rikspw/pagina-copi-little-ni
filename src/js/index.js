document.addEventListener('DOMContentLoaded', () => {
    // Selecionando todos os itens da lista de imagens e os botões
    const imagens = document.querySelectorAll('.carrosel .img');
    const botoes = document.querySelectorAll('.botoes .botao');

    // Função para atualizar a seleção da imagem e do botão
    const atualizarSelecao = (index) => {
        // Remover a classe 'selecionado' de todas as imagens e botões
        imagens.forEach(img => img.classList.remove('selecionado'));
        botoes.forEach(botao => botao.classList.remove('selecionado'));

        // Adicionar a classe 'selecionado' na imagem e no botão correspondente
        imagens[index].classList.add('selecionado');
        botoes[index].classList.add('selecionado');
    };

    // Adicionando o evento de clique em cada botão
    botoes.forEach((botao, index) => {
        botao.addEventListener('click', () => {
            atualizarSelecao(index);
        });
    });
});

  