// let textoDevolver = "Devolver";
// let textoAlugar = "Alugar";

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector(".dashboard__item__img");
    let botao = gameClicado.querySelector(".dashboard__item__button");

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented")
        botao.textContent = "Alugar";
        botao.classList.remove("dashboard__item__button--return")

    } else {
        imagem.classList.add("dashboard__item__img--rented")
        botao.textContent = "Devolver";
        botao.classList.add("dashboard__item__button--return")

 
    }

    /*
    if (botao.textContent == "Alugar") {
        botao.classList.add("dashboard__item__button--return")
        imagem.classList.add("dashboard__item__img--rented")
        mudarTextoParaDevolver();
    } else {
        botao.classList.remove("dashboard__item__button--return")
        imagem.classList.remove("dashboard__item__img--rented")
        mudarTextoParaAlugar();
        
    }
    */
}

/*
function mudarTextoParaDevolver (id, textoDevolver) {
    document.getElementById(id).innerText = textoDevolver;
}

function mudarTextoParaAlugar (id, textoAlugar) {
    document.getElementById(id).innerText = textoAlugar;
}

*/