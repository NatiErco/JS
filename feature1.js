// Utilice la desestructuración, en lugar de una variable temporal, para intercambiar los valores de las variables.

let num1 = 10;
let num2 = 20;


console.log('Before swap: ', num1, num2); 

//  Desestructuración de intercambio de valores de las variables let num1 y num2.-

[num1, num2] = [num2, num1];

console.log('After swap: ', num1, num2); 
