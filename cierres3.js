// Escribe un nuevo closure: crea una función llamada multiplyByTwo que tome un parámetro. Dentro de la multiplyByTwofunción, cree una función llamada inner. Esta función se encargará de multiplicar el parámetro pasado como entrada y multiplicarlo por la variable denominada number Imprimir en la consola la salida de la función.   Ejemplo: multiplyByTwo(4)(), resultado:8

// Ejemplo: multiplyByTwo(4)(), resultado:8


function multiplyByTwo (number) {
    let multiply = 2;

    function inner() {
        return number * multiply;
    }
    console.log(inner());
}
 multiplyByTwo(4);