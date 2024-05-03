// Intenta escribir tu primero closure. 
// Escribe una función llamada printNamey declara dentro de ella una variable llamada helloName, el valor de esta variable será: "Hello John". También declare una función nombrada innery devuelva la helloNamevariable. El propósito es imprimir "Hello John"en la consola.


function printName() {
  let helloName = "Hello John";

  function innery() {
      return helloName;
  }

  console.log(innery());
}

printName();
