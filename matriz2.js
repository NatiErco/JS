// Cree una función llamada nicknameMap que acepte una serie de personas y devuelva una serie de apodos. El apodo debe estar compuesto de esta forma: <name>-<age>.

// Ejemplo:

// { name: 'Paul', age: 21 } => Paul-21


// El método map itera sobre cada elemento del array original y permite ejecutar una función en cada uno de ellos para producir un nuevo valor. Esto nos permite realizar la transformación deseada en cada objeto de persona y obtener un nuevo array con los apodos <name>-<age>.

function nicknameMap(persons) {
return persons.map(person => `${person.name}-${person.age}`);
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persons);
console.log(persons);
console.log(nicknames);