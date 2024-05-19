// Utilice la desestructuración para asignar los valores solo con una línea de código.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

// La linea utiliza la desestructuración de objetos para extraer las propiedades id, firstName, lastName y age del objeto person y asignarlas a variables con los mismos nombres.

const { id,firstName,lastName,age } = person;

// const id = person.id;
// const firstName = person.firstName;
// const lastName = person.lastName;
// const age = person.age;

console.log(id, firstName, lastName, age);