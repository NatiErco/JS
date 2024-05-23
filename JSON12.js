//En este ejercicio necesitamos filtrar las propiedades del objeto persona para convertir solo los valores de identificación y edad a JSON.

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


// JSON.stringify(value, replacer): El segundo argumento replacer puede ser una función o una matriz de propiedades. Si es una matriz, solo las propiedades especificadas en la matriz se incluirán en el JSON resultante.

const json = JSON.stringify(person,["id","age"]);

console.log(json); // Should return: { "id": 1, "age": 25 }