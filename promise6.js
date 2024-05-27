
// A partir del ejercicio anterior, intente manejar mejor todos los errores a través de la Errorclase y el catchmétodo. Añade también el finallymétodo.


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
  .catch((error) => console.error(error))
  .finally(() => console.log('Finally'));