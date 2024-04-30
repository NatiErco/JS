// Convierta las funciones de las variables en funciones de flecha y combine las funciones para que el resultado de la siguiente operación matemática se imprima en la consola:((2 + 4) * (5 + 2) - 2) / 5

const sum = (a,b) =>  a + b;

const subtract = (a,b) =>  a - b;

const multiply = (a,b) =>  a * b;

const divide = (a,b) =>  a / b;

const log = value =>  console.log(value);

const step1 = sum(2,4);
console.log(step1);

const step2 = sum(5,2);
console.log(step2);

const step3 = multiply(step1,step2);
console.log(step3);

const step4 = subtract(step3,2);
console.log(step4);

const step5 = divide(step4,5);
console.log(step5);

log(step5)
