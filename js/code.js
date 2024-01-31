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
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  avisoSalida.remove();
  btnCopiar.style.visibility = "inherit";
}

function desencriptar(texto) {
  salida.value = texto
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");
  avisoSalida.remove();
  btnCopiar.style.visibility = "inherit";
}
// Aviso de validación

function textoNoValido() {
  avisoEntrada.style.color = "#FF0000";
  avisoEntrada.style.fontWeight = "700";
  avisoEntrada.textContent = "Para comenzar, debes ingresar un texto valido.";
  setTimeout(() => {
    avisoEntrada.removeAttribute("style");
    avisoEntrada.textContent = "Solo letras minúsculas y sin acentos.";
  }, 2500);
}

// Validar texto de entrada

function validarTexto(texto) {
  const textoArreglo = texto.split("");
  let esValido = true;

  if (texto === "") {
    esValido = false;
  } else {
    textoArreglo.forEach((caracter) => {
      if (
        !(caracter.charCodeAt(0) >= 97 && caracter.charCodeAt(0) <= 122) ||
        caracter.charCodeAt(0) === 32
      ) {
        esValido = false;
      }
    });
  }
  return esValido;
}

// Capturar entradas de texto

btnEncriptar.addEventListener("click", () => {
  let texto = entrada.value;

  validarTexto(texto) ? encriptar(texto) : textoNoValido();
});

btnDesencriptar.addEventListener("click", () => {
  let texto = entrada.value;

  validarTexto(texto) ? desencriptar(texto) : textoNoValido();
});

// Copiar texto de salida

btnCopiar.addEventListener("click", () => {
  salida.select();
  document.execCommand("copy");
});
