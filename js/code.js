// Capturar elementos HTML

const entrada = document.getElementById("entrada-texto");
const avisoEntrada = document.querySelector(".aviso-texto");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const salida = document.getElementById("salida-texto");
const avisoSalida = document.querySelector(".salida-aviso");
const btnCopiar = document.querySelector(".btn-copiar");

// Funciones encriptar y desencriptar

function encriptar(texto) {
  salida.value = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  avisoSalida.remove();
  btnCopiar.style.visibility = "inherit";
}

function desencriptar(texto) {
  salida.value = texto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  avisoSalida.remove();
  btnCopiar.style.visibility = "inherit";
}
// Aviso de validación

function textoNoValido() {
  avisoEntrada.style.color = "#FF0000";
  avisoEntrada.style.fontWeight = "700";
  avisoEntrada.textContent = "Para comenzar, ingresar un texto valido.";
  setTimeout(() => {
    avisoEntrada.removeAttribute("style");
    avisoEntrada.textContent =
      "No ingresar mayúsculas, caracteres especiales y acentos.";
  }, 2500);
}

// Validar texto de entrada

function validarTexto(cadena) {
  // Verificar si la cadena está vacía
  if (cadena.trim() === "") {
    return true;
  }
  // Retorna true solamente si la expresión regular encuentra coincidencias en la cadena.
  return /[A-ZÁÉÍÓÚÜÑ]|[^A-Za-z0-9\s]/.test(cadena);
}

// Capturar entradas de texto

btnEncriptar.addEventListener("click", () => {
  let texto = entrada.value;

  validarTexto(texto) ? textoNoValido() : encriptar(texto);
});

btnDesencriptar.addEventListener("click", () => {
  let texto = entrada.value;

  validarTexto(texto) ? textoNoValido() : desencriptar(texto);
});

// Copiar texto de salida

btnCopiar.addEventListener("click", () => {
  salida.select();
  document.execCommand("copy");
});
