// Convertir el developer objeto a JSON

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}

const developer = new Person(1, 'Mario', 'Rossi', 25);

const developerJson = JSON.stringify(developer);  // convierte el objeto developer a una cadena JSON.

console.log(developer);
console.log(developerJson);


