//Cree una función llamada sortPeopleByAgeque devuelva las personas en orden ascendente por edad.

function sortPeopleByAge(arr) {

 return arr.sort((a, b) => a.age - b.age); // El método sort se ejecuta directamente en el array arr de people. La función de comparación (a, b) => a.age - b.age determina el orden ascendente basado en la edad de cada persona. 
 // La función retorna el array ordenado.
}

const people = [
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

const sortingByAge = sortPeopleByAge(people)
console.log(sortingByAge)