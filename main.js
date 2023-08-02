const card = document.querySelector(".card__escondido");
const botao = document.querySelector(".botao__abrir");
const botaoFechar = document.querySelector(".botao__fechar");
const ajusteDisplay = document.querySelector("body");

botao.addEventListener("click", () => {
  card.style.display = "block";
  botao.style.display = "none";
});

botaoFechar.addEventListener("click", () => {
  card.style.display = "none";
  botao.style.display = "flex";
});
