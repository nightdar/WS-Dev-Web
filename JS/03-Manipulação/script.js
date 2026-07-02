const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const botao = document.getElementById("botao");

botao.addEventListener("click", function() {
    titulo.textContent = "Titulo Alterado";
    titulo.style.color = "red";

    texto.textContent = "Texto Alterado";
    texto.style.backgroundColor = "yellow";
    texto.style.color = "blue";
})

