const formSection = document.getElementById("form-section");
const resultSection = document.getElementById("result-section");
const rollButton = document.querySelector(".roll");
const rerollButton = document.querySelector(".reroll");
const inputAmount = document.querySelector("#amount");
const inputMin = document.querySelector("#min");
const inputMax = document.querySelector("#max");
const inputRepeat = document.querySelector("#repeat"); // Checkbox
const resultContent = document.querySelector(".result");
const form = document.querySelector("#form");

// Função para alternar a visibilidade das seções
function switchDiv() {
  formSection.classList.toggle("hidden");
  resultSection.classList.toggle("hidden");
}

// Função para limpar os resultados e resetar o formulário
function emptyResult() {
  form.reset();
  resultContent.innerHTML = "";
}

// Função para gerar números aleatórios únicos
function generateUniqueNumbers(amount, min, max) {
  const uniqueNumbers = new Set();

  while (uniqueNumbers.size < amount) {
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    uniqueNumbers.add(value.toString().padStart(2, "0"));
  }

  return Array.from(uniqueNumbers);
}

// Função para gerar um número aleatório
function generateRandomNumber(min, max) {
  const value = Math.floor(Math.random() * (max - min + 1)) + min;
  return value.toString().padStart(2, "0");
}

// Função para exibir os resultados na tela
function displayResults(numbers) {
  numbers.forEach((number) => {
    const newResult = document.createElement("p");
    newResult.textContent = number;
    resultContent.appendChild(newResult);
  });
}

// Função principal para processar os valores do formulário
function formValues() {
  const amount = Number(inputAmount.value);
  const min = Number(inputMin.value);
  const max = Number(inputMax.value);
  const maxNumbers = max - min + 1; // Correção: incluir o próprio número máximo
  const repeat = inputRepeat.checked; // Verifica se o checkbox está marcado

  // Verificar se a quantidade de números é válida
  if (maxNumbers < amount) {
    alert(
      "A quantidade de números sorteados é maior que a quantidade de números no intervalo pedido."
    );
    console.log(
      "A quantidade de números sorteados é maior que a quantidade de números no intervalo pedido."
    );
    switchDiv();
    emptyResult();
    return;
  }

  // Gerar e exibir os números
  if (repeat) {
    // Se a repetição não for permitida, gerar números únicos
    const uniqueNumbers = generateUniqueNumbers(amount, min, max);
    displayResults(uniqueNumbers);
  } else {
    // Se a repetição for permitida, gerar números aleatórios (podendo repetir)
    const numbers = Array.from({ length: amount }, () =>
      generateRandomNumber(min, max)
    );
    displayResults(numbers);
  }
}

// Event listeners
rollButton.addEventListener("click", function () {
  if (
    inputAmount.value !== "" &&
    inputMin.value !== "" &&
    inputMax.value !== ""
  ) {
    switchDiv();
    formValues();
  }
});

rerollButton.addEventListener("click", function () {
  switchDiv();
  emptyResult();
});
