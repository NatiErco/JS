// Escribe un promise. Si la variable llamada numberes mayor que 10, devuelve una resolución; de lo contrario, devuelve un rechazo. Luego gestiona la promesa con theny catchen caso de algún rechazo.

// Que es una promesa? Es un tipo especial de objeto js que tiene un estado, encapsula un codigo que se ejecuta de forma asincrona.
// resolve y reject son dos parametros que son funciones que menejan la resolución y el rechazo de la promesa.
const number = 15;

let newPromise = new Promise((resolve, reject) => {
  if (number > 10) {
    resolve(number);
  } else {
    reject(number);
  }
});

newPromise
  .then((val) => {
    console.log(val);
  })
  .catch((error) => {
    console.error(error);
  });
