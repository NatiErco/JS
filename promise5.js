// Escribe un primer promise que tome como parámetro la variable isLogged. Si la variable es verdadera, devolvemos un número aleatorio de la resolución; de lo contrario, enviamos un error.

// Escribimos un segundo promise que toma como parámetro una variable de tipo número. Si el parámetro de entrada es mayor que 0.5, en la resolución debemos devolver los siguientes datos: {name: "John", age: 24}, de lo contrario debemos enviar un error. Una vez hecho esto, intente encadenar las promesas para eventualmente devolver el objeto final.{name: "John", age: 24}

// PRIMER PROMESA

const isLogged = true;

function firstPromise(isLogged) {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      resolve(Math.random());
    } else {
      reject(new Error("User is not found"));
    }
  });
}

// SEGUNDA PROMESA

function secondPromise(randomNumber) {
  return new Promise((resolve, reject) => {
    if (randomNumber > 0.5) {
      resolve({ name: "John", age: 24 });
    } else {
      reject(new Error("Random number is less than 0.5"));
    }
  });
}

// ENCADENAMIENTO

firstPromise(isLogged)
  .then((randomNumber) => secondPromise(randomNumber))
  .then((val) => console.log(val))
  .catch((error) => console.error(error));

