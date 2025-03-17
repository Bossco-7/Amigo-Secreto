// Array para almacenar los nombres ingresados
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar si el campo está en blanco
    //if (nombre === "") {
        if (!nombre) {
        alert("Debes ingresar un nombre");
        input.focus();
        return;
    }

    // Validar que el valor ingresado contenga solo letras y espacios
    let regexSoloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (!regexSoloLetras.test(nombre)) {
        alert("Por favor, ingrese un nombre válido que contenga solo letras.");
        input.focus();
        return;
    }

    // Agregar el nombre al arreglo
    amigos.push(nombre);

    // Crear un elemento li y agregarlo a la lista en el HTML
    let li = document.createElement("li");
    li.textContent = nombre;
    document.getElementById("listaAmigos").appendChild(li);
    
    // Limpiar el campo de entrada y reenfocarlo
    input.value = "";
    input.focus();
}

// Función para sortear un amigo secreto de la lista
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    // Seleccionar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento con id "resultado"
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpiar resultados previos
    
    let li = document.createElement("li");
    li.textContent = "El amigo secreto es: " + amigoSecreto;
    resultado.appendChild(li);
    
    // Reiniciar el juego después de 5 segundos
    setTimeout(reiniciarJuego, 5000);
}

// Función para reiniciar el juego
function reiniciarJuego() {
    // Limpiar el arreglo y la lista en el HTML
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    
    // Limpiar el área de resultado
    document.getElementById("resultado").innerHTML = "";
    
    // Reenfocar el campo de entrada para iniciar un nuevo juego
    document.getElementById("amigo").focus();
}