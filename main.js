function abrirFecharElemento(targetId) {
  const elemento = document.getElementById(targetId);
  elemento.style.display = elemento.style.display === "none" ? "flex" : "none";
}

function fecharModal(targetId) {
  const modal = document.getElementById(targetId);
  modal.style.display = "none";
}

document.addEventListener("click", (event) => {
  const botao = event.target;
  if (botao.classList.contains("botao-abrir")) {
    const targetId = botao.getAttribute("data-target");
    abrirFecharElemento(`modal-${targetId}`);
  }
});
