
// Usando async y await implementamos el código necesario para recuperar el Todo con ID 4 a través de la siguiente URL: [link](https://jsonplaceholder.typicode.com/todos/4) .
// Luego cree dos elementos: Un elemento `<h2>` que contiene el título de Todo (propiedad de título)
// Un `<Tipo de entrada = "Casilla de verificación"> `con la propiedad Marcada establecida en el valor presente para la propiedad completa de Todo
// Agrega los dos elementos creados previamente dentro del contenedor

async function fetchTodo() { // La función fetchTodo es una función asíncrona que utiliza await para esperar la respuesta de la solicitud HTTP. Se realiza una solicitud GET a la URL https://jsonplaceholder.typicode.com/todos/4
    try {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
        
        // Se verifica si esta ok, sino lanza un error.
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Si esta ok, obtengo la respuesta en formato JSON
        const todo = await response.json();

        // H2
        // Se crea un elemento <h2> y se establece su contenido con el título del Todo (todo.title).
        const h2 = document.createElement('h2');
        h2.textContent = todo.title;

        //INPUT
        // Se crea un elemento <input type="checkbox"> y se establece su propiedad checked con el valor del Todo (todo.completed).
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;

        // CONTENEDOR
        // Se obtiene el contenedor con el ID container y se agregan los elementos creados (h2 y checkbox) a este contenedor.
        const container = document.getElementById('container');
        container.appendChild(h2);
        container.appendChild(checkbox);
    } catch (error) {
        console.error('Error al recuperar el Todo:', error);
    }
}

// POR ULTIMO, se llama a la función fetchTodo para recuperar el Todo y agregar los elementos al cargar la página
fetchTodo();
