
// Cree una función sumUntilque tome un parámetro y devuelva la suma de todos los números que van desde uno hasta el valor pasado como parámetro.

function sumUntil(maxValue) {
    let sum = 0;
    for (let i = 1; i <= maxValue; i++) {
        sum += i;
    }
    return sum;
    } 
    
    console.log(sumUntil(5));