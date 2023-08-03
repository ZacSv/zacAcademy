const card = document.querySelectorAll(".card__escondido");
const botao = document.querySelectorAll(".botao__abrir");
const botaoFechar = document.querySelector(".botao__fechar");

function mudaDisplay(elemento) {
  document.querySelector(elemento).style.display = "inline-block";
}

function fechaJanela(elemento) {
  document.querySelector(elemento).style.display = "none";
}

for (var index = 0; index < botao.length; index++) {
  const exercicio = botao[index].classList[1];
  const itemPositionBotao = botao[index];

  for (var i = 0; i < card.length; i++) {
    const cardIterado = card[i].classList[0];
  }
  itemPositionBotao.onclick = function () {
    mudaDisplay("#card__escondido__" + exercicio);
  };
}
