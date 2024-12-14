//Armazenando as classes em variáveis
const form = document.querySelector(".forms");
const value1Elem = document.getElementById("value1");
const value2Elem = document.getElementById("value2");
const resultInput = document.querySelector(".sum input");
const button = document.querySelector(".forms button");
const requiredFields = form.querySelectorAll("input[required]");

//Gerando os números aleatórios de 3 dígitos
function randomThreeDigitsValue() {
  return Math.floor(Math.random() * (999 - 100 + 1)) + 100;
}

function setRandomValues() {
  const value1 = randomThreeDigitsValue();
  const value2 = randomThreeDigitsValue();
  value1Elem.textContent = value1;
  value2Elem.textContent = value2;
}

// Validação do formulário
function resultValidation() {
  const value1 = parseInt(value1Elem.textContent);
  const value2 = parseInt(value2Elem.textContent);
  const expectedResult = value1 + value2;
  const userResult = parseInt(resultInput.value.trim());

  if (userResult === expectedResult) {
    showToast("Resposta correta, formulário enviado!", "success");
  } else {
    showToast("Resposta incorreta, tente novamente!", "error");
    resultInput.value = "";
    setRandomValues();
    toggleButtonState();
  }
}

function validateForm(event) {
  event.preventDefault();

  const allFilled = Array.from(requiredFields).every(
    (field) => field.value.trim() !== ""
  );

  if (!allFilled) {
    showToast("Preencha todos os campos obrigatórios!", "error");
    return;
  }

  resultValidation();
}

//"Ativar/desativar" botão de submit
function toggleButtonState() {
  const allFilled = Array.from(requiredFields).every(
    (field) => field.value.trim() !== ""
  );

  if (allFilled) {
    button.classList.add("button-active");
    button.classList.remove("button-disabled");
  } else {
    button.classList.remove("button-active");
    button.classList.add("button-disabled");
  }
}

// Mensagem do tipo Toast
function showToast(message, type) {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

//Event Listeners
setRandomValues();
form.addEventListener("submit", validateForm);
form.addEventListener("input", toggleButtonState);
