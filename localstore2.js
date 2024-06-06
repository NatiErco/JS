// A partir del ejercicio anterior, escriba un método que recupere los datos guardados localStorage y los imprima en la consola.

// Definición del objeto de usuario:

const user = {
    id: 1,
    name: "John",
    age: 25,
};
  
// 2- Función para guardar el objeto en localStorage:
  
function userSave(user) {
  
// 3- Convierto el objeto a una cadena JSON:
  
const userJson = JSON.stringify(user);
  
// 4- Usamos setItem para guardar la cadena JSON en localStorage con la clave'user':
  
localStorage.setItem('user', userJson);
}
  
// 5- Llamar a la función para guardar el usuario en localStorage:
  
userSave(user);

// 6 -  Obtengo lo guardado en el localStorage

function getUser() {
  // Recuperar la cadena JSON desde localStorage usando la clave 'user'

  const userJSON = localStorage.getItem('user');
  
  // Verifico si hay datos guardados con la clave 'user'

  if (userJSON) {
// Se debe convertir la cadena JSON de nuevo a un objeto JavaScript

    const user = JSON.parse(userJSON);
    
// Imprimimo el objeto en la consola
    console.log(user);
    
    return user;
    
  } else {
    console.log('No user data found in localStorage.');
    return null;
  }
}



  