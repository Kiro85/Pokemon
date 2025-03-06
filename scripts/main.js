// Objeto con toda la información de las cartas Mewtwo
const dataCartasMewtwo = [
    { id: 1, nombre: 'Carta de mewtwo de oro', descripcion: 'Mewtwo', rareza: 5, src: '../media/sobre_mewtwo/mewtwo_oro.jpg' },
    { id: 2, nombre: 'Carta de mewtwo inmersiva', descripcion: 'Mewtwo', rareza: 4, src: '../media/sobre_mewtwo/mewtwo_inmersivo.jpg' },
    { id: 3, nombre: 'Carta de mewtwo', descripcion: 'Mewtwo', rareza: 4, src: '../media/sobre_mewtwo/mewtwo.jpg' },
    { id: 4, nombre: 'Carta de articuno full art', descripcion: 'Articuno', rareza: 4, src: '../media/sobre_mewtwo/articuno.jpg' },
    { id: 5, nombre: 'Carta de articuno', descripcion: 'Articuno', rareza: 3, src: '../media/sobre_mewtwo/articuno2.jpg' },
    { id: 6, nombre: 'Carta de gengar full art', descripcion: 'Gengar', rareza: 5, src: '../media/sobre_mewtwo/gengar.jpg' },
    { id: 7, nombre: 'Carta de gengar', descripcion: 'Gengar', rareza: 3, src: '../media/sobre_mewtwo/gengar2.jpg' },
    { id: 8, nombre: 'Carta de cubone', descripcion: 'Cubone', rareza: 2, src: '../media/sobre_mewtwo/cubone.jpg' },
    { id: 9, nombre: 'Carta de porygon', descripcion: 'Porygon', rareza: 2, src: '../media/sobre_mewtwo/porygon.jpg' },
    { id: 10, nombre: 'Carta de giovanni', descripcion: 'Giovanni', rareza: 3, src: '../media/sobre_mewtwo/giovanni.jpg' },
    { id: 11, nombre: 'Carta de venusaur', descripcion: 'Venusaur', rareza: 5, src: '../media/sobre_mewtwo/venusaur.jpg' },
    { id: 12, nombre: 'Carta de dragonite', descripcion: 'Dragonite', rareza: 5, src: '../media/sobre_mewtwo/dragonite.jpg' },
    { id: 13, nombre: 'Carta de bulbasaur', descripcion: 'Bulbasaur', rareza: 3, src: '../media/sobre_mewtwo/bulbasaur.png' }
];
// Objeto con toda la información de las cartas Charizard
const dataCartasCharizard = [
    { id: 1, nombre: 'Carta de charizard de oro', descripcion: 'Charizard', rareza: 5, src: '../media/sobre_charizard/charizard_oro.jpg' },
    { id: 2, nombre: 'Carta de charizard inmersiva', descripcion: 'Charizard', rareza: 4, src: '../media/sobre_charizard/charizard_inmersiva.jpg' },
    { id: 3, nombre: 'Carta de charizard', descripcion: 'Charizard', rareza: 4, src: '../media/sobre_charizard/charizard.jpg' },
    { id: 4, nombre: 'Carta de moltres full art', descripcion: 'Moltres', rareza: 4, src: '../media/sobre_charizard/moltres.jpg' },
    { id: 5, nombre: 'Carta de moltres', descripcion: 'Moltres', rareza: 3, src: '../media/sobre_charizard/moltres2.jpg' },
    { id: 6, nombre: 'Carta de arcanine', descripcion: 'Arcanine', rareza: 4, src: '../media/sobre_charizard/arcanine.jpg' },
    { id: 7, nombre: 'Carta de alakazam', descripcion: 'Alakazam', rareza: 4, src: '../media/sobre_charizard/alakazam.jpg' },
    { id: 8, nombre: 'Carta de machamp', descripcion: 'Machamp', rareza: 3, src: '../media/sobre_charizard/machamp.jpg' },
    { id: 9, nombre: 'Carta de sabrina', descripcion: 'Sabrina', rareza: 3, src: '../media/sobre_charizard/sabrina.jpg' },
    { id: 10, nombre: 'Carta de lapras', descripcion: 'Lapras', rareza: 4, src: '../media/sobre_charizard/lapras.jpg' },
    { id: 11, nombre: 'Carta de meowth', descripcion: 'Meowth', rareza: 2, src: '../media/sobre_charizard/meowth.jpg' },
    { id: 12, nombre: 'Carta de slowpoke', descripcion: 'Slowpoke', rareza: 2, src: '../media/sobre_charizard/slowpoke.jpg' },
    { id: 13, nombre: 'Carta de charmander', descripcion: 'Charmander', rareza: 3, src: '../media/sobre_charizard/charmander.jpg' }
];
// Objeto con toda la información de las cartas Pikachu
const dataCartasPikachu = [
    { id: 1, nombre: 'Carta de pikachu de oro', descripcion: 'Pikachu', rareza: 5, src: '../media/sobre_pikachu/pikachu_oro.jpg' },
    { id: 2, nombre: 'Carta de pikachu inmersiva', descripcion: 'Pikachu', rareza: 4, src: '../media/sobre_pikachu/pikachu_inmersivo.jpg' },
    { id: 3, nombre: 'Carta de pikachu', descripcion: 'Pikachu', rareza: 4, src: '../media/sobre_pikachu/pikachu.jpg' },
    { id: 4, nombre: 'Carta de zapdos full art', descripcion: 'Zapdos', rareza: 4, src: '../media/sobre_pikachu/zapdos.jpg' },
    { id: 5, nombre: 'Carta de zapdos', descripcion: 'Zapdos', rareza: 3, src: '../media/sobre_pikachu/zapdos2.jpg' },
    { id: 6, nombre: 'Carta de gyarados', descripcion: 'Gyarados', rareza: 5, src: '../media/sobre_pikachu/gyarados.jpg' },
    { id: 7, nombre: 'Carta de blastoise', descripcion: 'Blastoise', rareza: 5, src: '../media/sobre_pikachu/blastoise.jpg' },
    { id: 8, nombre: 'Carta de wigglytuff', descripcion: 'Wigglytuff', rareza: 3, src: '../media/sobre_pikachu/wigglytuff.jpg' },
    { id: 9, nombre: 'Carta de snorlax', descripcion: 'Snorlax', rareza: 4, src: '../media/sobre_pikachu/snorlax.jpg' },
    { id: 10, nombre: 'Carta de digglet', descripcion: 'Digglet', rareza: 2, src: '../media/sobre_pikachu/digglet.jpg' },
    { id: 11, nombre: 'Carta de electrode', descripcion: 'Electrode', rareza: 3, src: '../media/sobre_pikachu/electrode.jpg' },
    { id: 12, nombre: 'Carta de misty', descripcion: 'Misty', rareza: 3, src: '../media/sobre_pikachu/misty.jpg' },
    { id: 13, nombre: 'Carta de squirtle', descripcion: 'Squirtle', rareza: 3, src: '../media/sobre_pikachu/squirtle.jpg' }
];



// -----------------FUNCIONES-----------------
// Lista de sobres fuera de la función para que sea accesible globalmente
const sobres = [
    { id: 'mewtwo', data: dataCartasMewtwo },
    { id: 'pikachu', data: dataCartasPikachu },
    { id: 'charizard', data: dataCartasCharizard }
];

// -----------------FUNCIONES-----------------
function cargarCartas() {
    if (document.getElementById('ordenar')) {
        let filtro = parseInt(document.getElementById('ordenar').value); // Convertimos a número el valor del filtro
    
        // Función para crear y añadir las cartas
        function crearCartas(sobreId, dataCartas) {
            const sobre = document.getElementById(sobreId); // Contenedor de sobre (contenedor padre)
    
            if (sobre) {
                // Eliminar las cartas anteriores antes de agregar nuevas
                const cartasPrevias = sobre.querySelector('.sobres_cartas');
                if (cartasPrevias) {
                    cartasPrevias.remove();
                }
    
                // Creamos el nuevo contenido
                const cartasSection = document.createElement('section'); // Contenedor de cartas
                cartasSection.classList.add('sobres_cartas', `sobre_${sobreId}`);
    
                dataCartas.forEach(cartaData => {
                    // Miramos si la rareza es igual al filtro para añadirlo o si el filtro es 0 entonces añadiremos todas
                    if (filtro === 0 || cartaData.rareza === filtro) {
                        const carta = document.createElement('img'); // Img de la carta
                        carta.src = cartaData.src;
                        carta.alt = cartaData.nombre;
                        cartasSection.appendChild(carta); // Img -> contenedor cartas
                    }
                });
    
                sobre.appendChild(cartasSection); // Contenedor cartas -> contenedor padre
            }
        }

        // Cargar cartas según el filtro utilizando la lista de sobres
        sobres.forEach(sobre => crearCartas(sobre.id, sobre.data));
    }
}

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
        sobreMewtwo.classList.remove('active')
        sobreCharizard.classList.remove('active')
        sobrePikachu.classList.remove('active')

        // Luego añadimos la que queremos
        sobreMewtwo.classList.add('active')

    } else if (alt == 'Sobre de Charizard') {
        sobreMewtwo.classList.remove('active')
        sobreCharizard.classList.remove('active')
        sobrePikachu.classList.remove('active')

        sobreCharizard.classList.add('active')

    } else if (alt == 'Sobre de Pikachu') {
        sobreMewtwo.classList.remove('active')
        sobreCharizard.classList.remove('active')
        sobrePikachu.classList.remove('active')

        sobrePikachu.classList.add('active')

    }
}

// Función para añadir los comentarios
function añadirComentario(lista) {
    let usuario = document.getElementById('usuarioNombre')
    let mensaje = document.getElementById('usuarioMensaje')
    let errorMensaje = document.getElementById('errorMensaje')
    let pattern = /^[A-Za-z]{4}\d$/

    // Añadimos a la lista los datos introducidos en el formulario
    if (pattern.test(usuario.value) && mensaje) {
        lista.push([usuario.value, mensaje.value])
        usuario.style.borderColor = 'gold'
        errorMensaje.classList.remove('active')
    } else {
        usuario.style.borderColor = 'red'
        errorMensaje.classList.add('active')
    }
}

// Función para actualizar los comentarios
function actualizarComentarios(lista) {
    let divComentarios = document.getElementById('comentarios');

    // Verificamos si el elemento existe
    if (divComentarios) {
        divComentarios.replaceChildren();

        for (let i = 0; i < lista.length; i++) {
            let nuevoComentario = document.createElement('article');
            nuevoComentario.classList.add('comentario');

            nuevoComentario.innerHTML = `
                <p class="usuario">${lista[i][0]}</p>
                <p class="texto">${lista[i][1]}</p>
            `;

            divComentarios.appendChild(nuevoComentario);
        }
    }
}


// Slider
function slider() {
    let slider = document.getElementById('slider')
    let img = document.querySelectorAll('.slider img') // Array con todas las imagenes para saber cuantas hay
    let index = 0 // Index que usaremos para multiplicar el valor de porcentaje
    
    // Cada x segundos, ejecutamos la función con setInterval
    setInterval(() => {
        let porcentaje = index * -20; // Multiplicamos el index por el porcetaje del width de las imagenes que hemos puesto en el css
    
        slider.style.transform = `translateX(${porcentaje}%)` // Lo agregamos

        // Incrementamos index en 1 para continuar el slider, si el index es mayor a la cantidad de imagenes, lo reseteamos
        if (index >= img.length - 1) {
            index = 0
        } else {
            index++
        }

    }, 3000)
}



// -----------------PROGRAMA PRINCIPAL-----------------

slider();
cargarCartas();

// Ejecutar la función del filtro cuando se cambie el filtro correctamente
document.addEventListener('DOMContentLoaded', function () {
    let ordenar = document.getElementById('ordenar');
    if (ordenar) {
        ordenar.addEventListener('change', cargarCartas); // Pasamos la función sin ejecutarla
    }
});


// -----------------ZOOM Y SELECTOR-----------------

// Contendor donde se guardan todas las imagenes de las cartas
const cartas = document.querySelectorAll('.sobres_cartas img')

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


// -----------------Menú nav para el móvil-----------------

let mobile = document.getElementById('mobile')
let mobileMenu = document.getElementById('mobileMenu')

// Enseñam u ocultamos el menú de navegación para el móvil
mobile.addEventListener('click', () => {
    mobileMenu.classList.toggle('active')
})

// -----------------Modo claro / oscuro-----------------

let buttonColor = document.getElementById('pokeball')
let body = document.getElementById('color')
let nav = document.getElementById('desktop')
let cursor = document.querySelector(".cursorSombra")
const shadow = document.querySelector("#cursor");


buttonColor.addEventListener('click', () => {
    body.classList.toggle('black');
    nav.style.border = 'goldenrod solid 3px';
    nav.style.boxShadow = '10px 10px 10px white';
    cursor.style.boxShadow = "10px 20px 50px 20px";
    shadow.classList.add("cursorSombraWhite");
    const thElements = document.querySelectorAll('th');
    const tdElements = document.querySelectorAll('td');

    for (let th of thElements) {
        if (th.style.backgroundColor === 'rgb(51, 51, 51)') {
            th.style.backgroundColor = '';
        } else {
            th.style.backgroundColor = '#333';
        }
    }

    for (let td of tdElements) {
        if (td.style.backgroundColor === 'rgb(51, 51, 51)') {
            td.style.backgroundColor = '';
        } else {
            td.style.backgroundColor = '#333';
        }
    }
});

// -}---------------- Sombra del cursor -----------------

body.addEventListener("mousemove", (e) => {
    shadow.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`;
});


// -----------------Comentarios-----------------

let comentariosLista = [['Carlos Sánchez', 'Texto de comentario de prueba, Añade el tuyo!']]
let submitComentario = document.getElementById('submitComentario')
actualizarComentarios(comentariosLista);

if (submitComentario) {
    submitComentario.addEventListener('click', (e) => {
    e.preventDefault()
    
        añadirComentario(comentariosLista)
        actualizarComentarios(comentariosLista);
    })
}


// -----------------------Esconder los comentarios-------------

document.addEventListener('DOMContentLoaded', () => {
    let buttonComent = document.getElementById('OculComent');
    let coment = document.getElementById('comentarios');

    // Verificar que los elementos existen antes de agregar el eventListener
    if (buttonComent && coment) {
        // Cuando el usuario haga clic en el botón
        buttonComent.addEventListener('click', function() {
            coment.classList.toggle('active');
        });
    }
});
