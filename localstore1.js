// Escriba una función que guarde el objeto de usuario localStorage con su clave 'usuario'.

// 1- Definición del objeto de usuario:

const user = {
  id: 1,
  name: "John",
  age: 25,
};

// 2- Función para guardar el objeto en localStorage:

function userSave(user) {

// 3- Convertir el objeto a una cadena JSON:

  const userJson = JSON.stringify(user);

// 4- Guardar la cadena JSON en localStorage con la key 'usuario':

  localStorage.setItem('usuario', userJson);
}

// 5- Llamar a la función para guardar el usuario en localStorage:

userSave(user);

