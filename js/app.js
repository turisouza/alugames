//criando uma função que recebe um parâmetro
function alterarStatus(id) {
    //buscando o ID do game clicado pelo usuário, utilizando o template string para o parãmetro ID
    let gameClicado = document.getElementById(`game-${id}`);
    //buscando a imagem do game através da classe
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    //buscando o botão escolhido atravées da classe
    let botao = gameClicado.querySelector(".dashboard__item__button");

    //condificional para identificar se a opção clicada já estava alugada
    if (imagem.classList.contains("dashboard__item__img--rented")) {
        //retidando a classe de alugado imagem do game
        imagem.classList.remove("dashboard__item__img--rented")
        //alterando o texto do botão
        botao.textContent = "Alugar";
        //retirando a classe de alugado do botão do game
        botao.classList.remove("dashboard__item__button--return")

    } else {
        //incluindo a classe de alugado na imagem no game
        imagem.classList.add("dashboard__item__img--rented")
        //trocando o texto do botão
        botao.textContent = "Devolver";
        //incluindo a classe de disponível no botão do game
        botao.classList.add("dashboard__item__button--return")

 
    }

}
