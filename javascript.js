var setadireita = window.document.getElementById("setadireita");
var feedback1 = window.document.getElementById("feedback1");
var feedback2 = window.document.getElementById("feedback2");
var feedback3 = window.document.getElementById("feedback3");
var setaesquerda = window.document.getElementById("setaesquerda");

var botao = window.document.getElementsByClassName("butao");

function rolarparadireita() {
  feedback1.style = "display:none";
  feedback3.style = "display:flex";
  setadireita.style = "display:none";
  setaesquerda.style = "display: flex";
}

function rolarparaesquerda() {
  feedback1.style = "display:flex";
  feedback3.style = "display:none";
  setaesquerda.style = "display:flex";
  setadireita.style = "display: flex";
}

function dadosenviados() {
  alert("Dados enviados com sucesso!");
}

document.getElementById("formulario2").onsubmit = function () {
  dadosenviados();
};

ScrollReveal().reveal("#formulario");
ScrollReveal().reveal(".feedback");
ScrollReveal().reveal("#segunda-parte");
ScrollReveal().reveal("#fundo");
