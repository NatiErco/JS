// Escriba una función llamada printAsyncName, que toma una devolución de llamada y una cadena (que será el nombre) como parámetros. La función de devolución de llamada simplemente imprimirá "Hola". La función printAsyncName deberá ejecutar la función de devolución de llamada después de un intervalo de 1 segundo. Luego de un intervalo de 2 segundos, debemos imprimir el nombre que tomamos como parámetro.


function printAsyncName(callback, name) {
  setInterval(() => {
    callback();
  }, 1000);

    setTimeout(() => {
      console.log(name);
    }, 2000); 

}


printAsyncName(() => {
    console.log("Hello");
  }, "Natalia"); 

  // La funcion flecha reemplaza cuando escribimos la palabra function.
// printAsyncName(function () {
// console.log("Hello");    
// },"Natalia");

