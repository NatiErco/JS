  // Modify the property `firstName` of the `person2` in "Simon".

const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  };
  
const person2 = person1;
  
person2.firstName= "Simon";

console.log(person1);
console.log(person2);


// Se modifica person2 tambien, porque ambos hacen referencia al mismo objeto.
