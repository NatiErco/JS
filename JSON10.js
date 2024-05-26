

// Crea el fromJsonmétodo que toma un json como parámetro y devuelve un objeto de tipo Person.

class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

// método estático fromJson a la clase Person. Este método toma una cadena JSON como parámetro, la convierte en un objeto JavaScript utilizando JSON.parse, y luego utiliza los datos de ese objeto para crear una nueva instancia de Person usando el constructor de la clase. Finalmente, devuelve esta nueva instancia de Person.

static fromJson(json) {
    const data = JSON.parse(json);
    return new Person (data.id, data.firstName, data.lastName, data.age);
  }
}

json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
const developer = Person.fromJson(json);
console.log(developer);