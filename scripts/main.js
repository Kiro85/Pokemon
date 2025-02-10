// Objeto con toda la información de las cartas Mewtwo
const dataCartasMewtwo = [
    {
        id: 1,
        nombre: 'Carta de mewtwo de oro',
        descripcion: 'cosas',
        estrellas: 5,
        src: '../media/sobre_mewtwo/mewtwo_oro.jpg'
    }
];
// Objeto con toda la información de las cartas Pikachu
const dataCartaspikachu = [
    {
        id: 1,
        nombre: 'Carta de mewtwo de oro',
        descripcion: 'cosas',
        estrellas: 5,
        src: '../media/sobre_mewtwo/mewtwo_oro.jpg'
    }
];


function cargarCartas() {
    // Sobre Mewtwo
    const sobreMewtwo = document.getElementById('mewtwo') // Contenedor de sobres

    // Creamos un section donde pondremos el las cartas
    const cartasMewtwo = document.createElement('section')
    cartasMewtwo.classList.add('sobres_cartas', 'sobre_mewtwo')
    
    // Por cada elemento de la lista, añadimos una carta
    for (let i = 0; i < dataCartasMewtwo.length; i++) {
        const carta = document.createElement('img')
        carta.src = dataCartasMewtwo[i].src
        carta.alt = dataCartasMewtwo[i].nombre
    
        cartasMewtwo.appendChild(carta)
    }
    
    sobreMewtwo.appendChild(cartasMewtwo)

    // Sobre Pikachu
    const sobrePikachu = document.getElementById('pikachu') // Contenedor de sobres

    // Creamos un section donde pondremos el las cartas
    const cartasPikachu = document.createElement('section')
    cartasPikachu.classList.add('sobres_cartas', 'sobre_pikachu')
    
    // Por cada elemento de la lista, añadimos una carta
    for (let i = 0; i < dataCartasMewtwo.length; i++) {
        const carta = document.createElement('img')
        carta.src = dataCartaspikachu[i].src
        carta.alt = dataCartaspikachu[i].nombre
    
        cartasPikachu.appendChild(carta)
    }
    
    sobrePikachu.appendChild(cartasPikachu)




}


cargarCartas()
















// -----------------FUNCIONES-----------------

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
        const zoomFondo = document.querySelector('.zoomFondo')

        zoomFondo.remove()
    })

    sobre.appendChild(div)
}

// Función para seleccionar las cartas
function selector(alt) {
    // Obtenemos los 3 apartados diferentes de sobres
    const sobreMewtwo = document.querySelector('.sobre_mewtwo')
    const sobreCharizard = document.querySelector('.sobre_charizard')
    const sobrePikachu = document.querySelector('.sobre_pikachu')

    // Dependiendo del sobre al que se haya hecho click, abriremos un sobre u otro
    if (alt == 'Sobre de Mewtwo') {
        // Primero eliminamos las actives que puedan haber
        sobreMewtwo.classList.remove('sobreActive')
        sobreCharizard.classList.remove('sobreActive')
        sobrePikachu.classList.remove('sobreActive')

        // Luego añadimos la que queremos
        sobreMewtwo.classList.add('sobreActive')

    } else if (alt == 'Sobre de Charizard') {
        sobreMewtwo.classList.remove('sobreActive')
        sobreCharizard.classList.remove('sobreActive')
        sobrePikachu.classList.remove('sobreActive')

        sobreCharizard.classList.add('sobreActive')

    } else if (alt == 'Sobre de Pikachu') {
        sobreMewtwo.classList.remove('sobreActive')
        sobreCharizard.classList.remove('sobreActive')
        sobrePikachu.classList.remove('sobreActive')

        sobrePikachu.classList.add('sobreActive')

    }
}


// Contendor donde se guardan todas las imagenes de las cartas
const cartas = document.querySelectorAll('.sobres_cartas img')


// -----------------ZOOM Y SELECTOR-----------------

// Por cada imagen, añadimos un evento individual. El cual llamará a la función del zoom
cartas.forEach(carta => {
    carta.addEventListener('click', () => {
        // Con el if decidimos a que función llamar, dependiendo de si nos referimos a un selector o cartas normales
        if (!carta.closest('.selectorSobres')) {
            const sobre = carta.closest('.sobres') // Le pasamos como parámetro el contenedor .sobres más cercano
            zoom(carta.src, carta.alt, sobre)
        } else {
            selector(carta.alt)
        }
    })
})