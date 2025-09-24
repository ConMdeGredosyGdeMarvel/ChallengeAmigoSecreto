// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Captura el valor del campo de entrada
    let nombreAmigoInput = document.getElementById('nombre-amigo');
    let nombreAmigo = nombreAmigoInput.value;

    // Valida la entrada
    if (nombreAmigo === '') {
        alert("Por favor, inserte un nombre.");
        return; // Detiene la ejecución si el campo está vacío
    }

    // Actualiza el array de amigos
    amigos.push(nombreAmigo);

    // Limpia el campo de entrada
    nombreAmigoInput.value = '';

    // Actualiza la visualización de la lista
    actualizarLista();
}

function actualizarLista() {
    // Obtiene el elemento de la lista
    let lista = document.getElementById('lista-amigos');
    
    // Limpia la lista existente
    lista.innerHTML = '';

    // Itera sobre el arreglo y agrega elementos a la lista
    for (let i = 0; i < amigos.length; i++) {
        // Crea un nuevo elemento de lista <li>
        let item = document.createElement('li');
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    // Valida que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtiene el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Muestra el resultado
    let resultado = document.getElementById('resultado-sorteo');
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}