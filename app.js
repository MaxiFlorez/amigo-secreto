let amigos = []; 

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();
    
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }
    
    amigos.push(nombre);
    
    inputAmigo.value = "";
    
    actualizarLista();
}


function actualizarLista() { 
    const lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";
    
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    
    const indice = Math.floor(Math.random() * amigos.length);
    
    const amigoSorteado = amigos[indice];
    
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}
