// A partir del ejercicio anterior, queremos agregar a nuestra función repeatHello, clearIntervaldespués de 5 segundos, ¿podrías hacer eso?
// La función de devolución de llamada debe ser una función de flecha, ¿puedes explicar también por qué?

// setInterval:
// Es una funcion propia de Javascript, por eso no tenemos que agregar el function antes.. solo puede ser usada dentro de una funcion, como estamos haciendo ahora.
// Callback es una funcion, y 5000 es el intervalo de tiempo. setInterval es una funcion anomina, y dentro voy a llamar a mi argumento de la funcion repeatHello. La ejecucion de nuestra funcion se engloba entre las llaves.

function repeatHello(callback) {
    const intervalId = setInterval(callback, 1000);
    
    setTimeout(() => {
      clearInterval(intervalId);
    }, 5000);
  }
  
  const sayHello = () => {
    console.log("Hello");
  };
  
  // Llamamos a repeatHello pasando la función de flecha como parámetro
  repeatHello(sayHello);
  