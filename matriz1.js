// Ejercicio: Cree una función llamada adultFilterque acepte una serie de personas y devuelva las que son mayores de edad.

// El método filter toma una función de devolución de llamada (callback) que se ejecuta una vez para cada elemento del array.

function adultFilter(persons) {
  return persons.filter((person) => person.age >= 18);
}

const persons = [
  { name: "Paul", age: 16 },
  { name: "George", age: 17 },
  { name: "Lucas", age: 21 },
  { name: "Marco", age: 32 },
  { name: "Peter", age: 18 },
  { name: "Carl", age: 13 },
  { name: "Simon", age: 24 },
  { name: "Mark", age: 15 },
  { name: "Sandra", age: 34 },
  { name: "Alice", age: 28 },
];

const adults = adultFilter(persons);
console.log(persons);
console.log(adults);
