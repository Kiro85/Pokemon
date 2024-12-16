# <span style="color:blue;">Documentación Página Web (Pokémon TCGP) </span>
## <span style="color:blue;">1. La estructura de la página es la siguiente:</span>

 - **/ Pokemon-main**(Carpeta de toda la página web):  
    - **/fonts.**  
        - **pokemon Solid.ttf** (Tipo de letra de los títulos).  
        - **Pokemon_GB.ttf** (Tipo de letra que pertenece al texto general).  
    - **/media.**  (Contiene todas las imágenes de la página web).  
        - **/sobres_charizard.**
        - **/sobres_mewtwo.**
        - **/sobres_pikachu.**
    - **/Pages.** (Contiene las páginas de la web).
        - **detalles.html**
        - **info.html**
        - **sobres.html**
        - **formularios**
    - **/style.** (Contiene la hoja de CSS).
        - **style.css**

## <span style="color:blue;">2. Tecnologías utilizadas.</span>

#### 2.1. Versión HTML y CSS:

Se utilizó la actual versión de estos: HTML5, CSS3.

 #### 2.2. Visual Studio Code:
Hemos desarrollado la pagina web utilizando el IDE que ayuda al desarrollo de código.

 #### 2.3. GitHub:
Utilizamos la Plataforma GitHub, que nos permite sincrinzar nuestros progresos de la pagina web.

 #### 2.4. Optimizar las imágenes.
 Se ha utilizado la página web: https://www.iloveimg.com/es/convertir-a-jpg para cambiar el formato de la imagenes a .png y .jpeg y optimizar las imágenes utilizadas.
 
 ##### 2.4.1. Ejemplo de optimización:
 Primero se sube la imagen a la pagina web, seguido de esto procedemos a optimizar la imagen:

 ![Optimización](/media/readme/Ejemplo3.png)

 Podemos ver que ha comprimido la imagen hasta un 63% del tamaño original.
 
 En el caso de nuestra página la carpeta media pesaba al rededor de 30MB, al comprimir las imagenes ahora pesan alrededor 8MB. 

 ## <span style="color:blue;">3- Características y funcionalidades principales de la web.</span>
 Esta página web se podría describir como a un blog sobre el reciente juego de pokémon. Su  función principal es informar a los nuevos jugadores.

#### 3.1. Versión escritorio y versión móvil.

Hemos adaptado la página para todas las resoluciones superiores a un ancho de 350px

 ##### Algunos ejemplo de la versión de escritorio:

 ##### Barra de navegación: 
 ![Captura de pc 1](./media/readme/Captura-PC.PNG)

 ##### Secciones:
 ![Captura de pc 2](./media/readme/Captura-PC2.PNG)


 ##### Sobres:
 ![Captura de pc 3](./media/readme/Captura-PC3.png)

 ##### Forumularios:
 ![alt text](media/readme/Captura-PC4.png)

 ##### Algunos ejemplos de la versión móbil:
 
 ##### Barra de navegación:
 ![Captura de mobil 1](./media/readme/Captura-Mobil.PNG)

 ##### Secciones: 
 ![Captura de mobil 2](./media/readme/Captura-Mobil2.PNG)

 ##### Sobres:
 ![Captura de mobil 3](./media/readme/Captura-Mobil3.png)

 ##### Forumularios:
![alt text](media/readme/Captura-Mobil4.png)

## <span style="color:blue;"> 4- Expresiones regulares para la validación.</span>

~~~~
^[\w.-]+@[a-zA-Z\d.-]+.[a-zA-Z]{2,}$

- ^ y $: Aseguran que se evalúe toda la cadena.
- [\w.-]+: Permite letras, números, guiones bajos (_), puntos (.) y guiones (-) antes del @.

- +: Permite que haya 1 o más carácteres especificados en  el apartado anterior

- @: Representa el símbolo obligatorio de un correo electrónico.
- [a-zA-Z\d.-]+: Permite letras, números, puntos y guiones en el dominio.

- .[a-zA-Z]{2,}: Verifica que haya un punto seguido por al menos dos letras (dominio de nivel superior como .com, .org, etc.).
~~~~

~~~~
^\d{10}$

- ^: Comienza al inicio de la cadena.
- \d: Representa un dígito (0-9).
- {10}: Exactamente 10 dígitos.
- $: Termina al final de la cadena.
~~~~

## <span style="color:blue;"> 5-Modificaciones realizadas(Formularios).</span>
- Se han modificado los **index** de cada pagina web.
- Añadido imagenes a la carpeta **media** y **/media/readme**.
- Añadir la pagina **forumlarios** a la carpeta pages.
- Se añadio un apartado al **CSS** que modifica el banner de la pagina formularios 
- Se ha añadido estilos a los formularios y se les ha hecho resposive.

## <span style="color:blue;"> 6- Distribución de tareas.</span>
| **Responsable** | **Tarea**                                                                                 | **Duración** |
|------------------|-------------------------------------------------------------------------------------------|--------------|
| **Cristian**     | Estructura base de todo el CSS y HTML que se usarán en las demás páginas (Colores, forma de la página, secciones). | 3h       |
|                  | Búsqueda de imágenes y contenido de la página (sobres).                                   | 1h           |
|                  | Ordenar, limpiar y revisar código, añadir decoración al index.html.                       | 3h           |
|                  | Crear el footer y hacer la página index responsive.                                       | 2h           |
|                  | Empezar la estructura de la página de sobres.                                             | 1h           |
|                  | Acabar la estructura de la página de sobres.                                              | 2h           |
|                  | Buscar imágenes y optimizar CSS.                                                          | 2h           |
|                  | CSS Tabla.                                                                                | 1h           |
|                  | Correccion de errores.                                                                    | 1h           |
|                  | CSS de la pagina web Formularios + validaciones.                                                                    | 2h           |

| **Responsable**  | **Tarea**                                                                                 | **Duración** |
|------------------|-------------------------------------------------------------------------------------------|--------------|
| **Sven**         | Buscar información para el contenido del body.                                            | 2h           |
|                  | Añadir contenido a la página web (Página Principal) y modificar CSS.                      | 30m          |
|                  | Búsqueda de información de la página detalles.                                            | 30m          |
|                  | Crear las páginas web (detalles).                                                         | 1h           |
|                  | Generar el texto de la página web info.                                                   | 30m          |
|                  | Crear las páginas web (info).                                                             | 1h           |
|                  | Creación del MARKDOWN.                                                                    | 2h           |
|                  | Creacion Pagina web(Formularios, sin las validaciones).                                                                    | 2h           |
|                  | Modificación del README(Explicaciones de las expresiones, Imagenes,etc..).                                                                    | 1h           |

| **Responsables** | **Tarea**                                                                                 | **Duración** |
|------------------|-------------------------------------------------------------------------------------------|--------------|
| **Sven** y **Cristian**| Ultima revision de la pagina web.                                                   |  2h          |