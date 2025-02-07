// Función para hacer zoom en una imagen
function zoom(src, alt, sobre) {
    // Creamos un div donde pondremos la imagen con zoom
    let div = document.createElement('div')
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
let cartas = document.querySelectorAll('.sobres_cartas img')

// Por cada imagen, añadimos un evento individual. El cual llamará a la función del zoom
cartas.forEach(carta => {
    carta.addEventListener('click', () => {
        let sobre = carta.closest('.sobres') // Le pasamos como parámetro el contenedor .sobres más cercano
        zoom(carta.src, carta.alt, sobre)
    })
})