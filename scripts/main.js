// Objeto con toda la información de las cartas
const dataCartasMewtwo = [
    {
        id: 1,
        nombre: 'Carta de mewtwo de oro',
        descripcion: 'cosas',
        estrellas: 5,
        src: '../media/sobre_mewtwo/mewtwo_oro.jpg'
    }
];


function cargarCartas() {
    const sobres = document.querySelector('.sobres') // Contenedor de sobres

    // Creamos un section donde pondremos el las cartas
    const sobresCartas = document.createElement('section')
    sobresCartas.classList.add('sobres_cartas', 'sobre_mewtwo')
    
    // Por cada elemento de la lista, añadimos una carta
    for (let i = 0; i < dataCartasMewtwo.length; i++) {
        const carta = document.createElement('img')
        carta.src = dataCartasMewtwo[i].src
        carta.alt = dataCartasMewtwo[i].nombre
    
        sobresCartas.appendChild(carta)
    }
    
    sobres.appendChild(sobresCartas)
}


cargarCartas()

















// Función para hacer zoom en una imagen
function zoom(src, alt, sobre) {
    // Creamos un div donde pondremos la imagen con zoom
    const div = document.createElement('div')
    div.classList.add('zoomFondo') // Añadimos una clase al div

    // Añadimos el contenido haciendo dinámica la src de la imagen
    div.innerHTML = `
            <div class="zoomCarta">
                <img src="${src}" alt="${alt}">
            </div>
    `

    // EventListener para eliminar el zoom
    div.addEventListener('click', () => {
        let zoomFondo = document.querySelector('.zoomFondo')

        zoomFondo.remove()
    })

    sobre.appendChild(div)
}

// Contendor donde se guardan todas las imagenes de las cartas
const cartas = document.querySelectorAll('.sobres_cartas img')

// Por cada imagen, añadimos un evento individual. El cual llamará a la función del zoom
cartas.forEach(carta => {
    carta.addEventListener('click', () => {
        const sobre = carta.closest('.sobres') // Le pasamos como parámetro el contenedor .sobres más cercano
        zoom(carta.src, carta.alt, sobre)
    })
})