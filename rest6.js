// La función de suma tiene una gran cantidad de parámetros. ¿Cómo podemos mejorar el código para que acepte cualquier cantidad de números para sumar como argumento?

// function sum(num1, num2, num3, num4, num5) {
//     return num1 + num2 + num3 + num4 + num5;
// }


// TAMBIEN SE PUEDE HACER ASI 

function sum(...numbers) {
    
     return numbers.reduce((a,b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4, 5));

// function sum(...numbers) {
//     let total =0;

//    for (let i = 0; i < numbers.length; i++) {
//    total+= numbers[i];
    
//    }
//  return total;
// }

// console.log(sum(1, 2, 3, 4, 5));