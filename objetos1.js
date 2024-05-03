// Crea un objeto person. Imprima su par clave/valor en la consola. Intenta utilizar el método Object.keys:

// firstName: Mario
// lastName: Rossi
// age: 25


const person = {
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
};

const keys = Object.keys(person);
console.log(keys);
const values = Object.values(person);
console.log(values)