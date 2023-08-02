const card = document.querySelector(".card__escondido");
const botao = document.querySelector(".botao");

botao.addEventListener("click", () => {
  card.style.display = "block";
});
