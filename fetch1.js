// Fetch tomara 2 parametros, la URL que estamos solicitando y algunos metadatos que podemos agregar para ver el comportamiento de la API.
//Fetch se basa en promesas y proporciona una mejor alternativa que se puede utilizar fácilmente en los trabajadores de servicios . Fetch también integra conceptos HTTP avanzados como CORS y otras extensiones de HTTP.

//    fetch("(https://jsonplaceholder.typicode.com/todos)")
//     // method: "POST";
//    .then((res) => res.json())
//    .then((val) => console.log(val))
//    .catch((error) => console.error(error));

// METODO GET, estoy pidiendo la informacion, recibiendola!

const url = "https://jsonplaceholder.typicode.com/todos";

async function fecthTodo() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('HTTP error! status: ${response.status}');
      }  
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}


fecthTodo()