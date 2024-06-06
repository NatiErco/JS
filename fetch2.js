// Usando async y await, implemente el código necesario para realizar una solicitud HTTP POST. Para crear una nueva publicación, utilice la siguiente URL: (https://jsonplaceholder.typicode.com/posts)
// (Method: Post).. El cuerpo de la solicitud debe contener un objeto de publicación con la siguiente información: título y Bandera Completada. Los datos del puesto deben transmitirse tras la elaboración de un formulario.

// METHOD POST

document
  .getElementById("postForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Este codigo selecciona el formulario con el ID postForm.
    // Se agrega un "event listener" para el evento submit (enviar) del formulario. Tiene una funcion asincrona asociada al evento.
    // Usa event.preventDefault() para evitar que el formulario se envíe de la forma tradicional...

    // Obtiene los valores del campo de texto title y del checkbox completed.

    const title = document.getElementById("title").value; // (Obtiene el valor del campo de entrada con el ID title (el texto ingresado por el usuario).)
    const completed = document.getElementById("completed").checked; //(idem arriba pero con el ID completed)

    // Se crea un objeto post con las propiedades title y completed, utilizando los valores obtenidos del formulario.
    const postData = {
      title: title,
      completed: completed,
    };

    try {
      // Intenta realizar la solicitud POST
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          // Usa fetch para realizar una solicitud HTTP POST a la URL especificada.
          method: "POST", // Indica que el método de la solicitud es POST.
          headers: {
            "Content-Type": "application/json", // Establece el encabezado Content-Type a application/json para indicar que el cuerpo de la solicitud está en formato JSON.
          },
          body: JSON.stringify(postData), // Convierte el objeto post a JSON y lo envía en el cuerpo de la solicitud.
        }
      );

      // Verifica si la respuesta es satisfactoria.
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Si la respuesta es satisfactoria, convierte los datos de la respuesta a JSON y los imprime en la consola.

      const responseData = await response.json(); // Espera a que la respuesta se convierta a formato JSON.

      console.log("Success:", responseData); // Imprime la respuesta JSON en la consola.

      alert("Post created successfully!"); // Muestra una alerta al usuario indicando que la publicación fue creada con éxito.
    } catch (error) { // Captura cualquier error que ocurra durante el proceso.
      console.error("Error:", error); // Imprime el error en la consola.
      alert("Failed to create post."); // Muestra una alerta al usuario indicando que hubo un error al crear la publicación.
    }
  });
