const formulario = document.getElementById("formulario");
const name = document.getElementById("name");
const error = document.getElementById("error");

formulario.addEventListener("submit", function() {
    event.preventDefault();

    if(name.value === ""){
        error.textContent = "O campo nome é obrigatório!";
        error.style.color = "red";
    } else {
        error.textContent = "Formulario enviado com sucesso!";
        error.style.backgroundColor = "green";
        error.style.color = "white";
    }
});