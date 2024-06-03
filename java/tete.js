
const formulario = document.getElementById('list');

formulario.addEventListener('submit', function(event) {

    const nome = document.getElementById('nome').value;
    const combo = document.getElementById('combo').value;

    adicionarEvento(nome, combo);
    mostrarEventos();
});

function adicionarEvento(nome, combo) {
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

    console.log('Teste 2');

    eventos.push({ nome, combo });
    localStorage.setItem('eventos', JSON.stringify(eventos));
}

function mostrarEventos() {
    const eventos = JSON.parse(localStorage.getItem('eventos')) || [];
    const lista = document.getElementById('lista');
    lista.innerHTML = '';

    eventos.forEach(evento => {
        const item = document.createElement('li');
        item.textContent = evento.nome + " - " + evento.combo;
        lista.appendChild(item);
    });
}

mostrarEventos();