// Utilice la desestructuración para facilitar la comprobación de la edad. Intente modificar el parámetro de la función isAdult.

// function isAdult(person) {
//   return person.age >= 18;
// }

function isAdult ({ age }) {
    return age >= 18;
  }

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));