window.onload = () => {
    let botones = document.querySelectorAll('.boton-estado')
    botones.forEach(boton => {
        boton.addEventListener('click', agregar);
    });
    let filtro = document.getElementById("filtrar");
    filtro.addEventListener('input', filtrar);
}

function agregar(e) {
    let button = e.target;
    e.target.classList.add('btn-success');
    button.innerText = "Agregado";
    button.disabled = true;
}

function filtrar(e) {
    let filtro = e.target.value;
    let lista_dni = document.querySelectorAll('.dni');
    lista_dni.forEach(dni => {
        if(dni.innerText.includes(filtro)) {
            dni.parentElement.classList.remove('d-none')
        } else {
            dni.parentElement.classList.add('d-none')
        }
    })
}