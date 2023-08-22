function abrirFecharElemento(targetId, delay) {
  const elemento = document.getElementById(targetId);
  setTimeout(() => {
    elemento.style.display = "flex";
  }, delay);
}

function fecharModal(targetId) {
  const modal = document.getElementById(targetId);
  modal.style.display = "none";
}

document.addEventListener("click", (event) => {
  const botao = event.target;
  const botaoFechar = event.target;

  if (botaoFechar.classList.contains("icone-fechar")) {
    const targetFechamento = botao.getAttribute("data-target");
    fecharModal(`modal-${targetFechamento}`);
  }
  if (botao.classList.contains("botao-abrir")) {
    const targetId = botao.getAttribute("data-target");
    abrirFecharElemento(`modal-${targetId}`, 100);
  }
});
