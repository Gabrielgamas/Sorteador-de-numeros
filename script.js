function trocarDiv() {
  const formSection = document.getElementById("form-section");
  const resultSection = document.getElementById("result-section");

  // Alterna a visibilidade das seções
  formSection.classList.toggle("hidden");
  resultSection.classList.toggle("hidden");
}

// Adicionando o evento de clique para o botão de "SORTEAR"
document.addEventListener("DOMContentLoaded", function () {
  const rollButton = document.querySelector(".roll");
  rollButton.addEventListener("click", trocarDiv);

  // Adicionando o evento de clique para o botão de "SORTEAR NOVAMENTE"
  const rerollButton = document.querySelector(".reroll");
  rerollButton.addEventListener("click", trocarDiv);
});
