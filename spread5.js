// Operador Prograpacion /  "Operador Spread " cuando usamos este operador siempre creamos una nueva matriz, la original se mantiene intacta. El resultado obtenido es el mismo usando el metodo push.


// let arr = [1,2,3,4];

// let newArr = [...arr, 3]
// // newArr.push(3);
// console.log(newArr);

// Sabes cómo "fusionar" el valor de la newNumber variable numberStoresin utilizar el método de matriz push?

let numberStore = [0, 1, 2];

let newNumber = [...numberStore, 3];

console.log(numberStore);
console.log(newNumber);
