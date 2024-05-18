

class Person {
constructor (firstName,lastName,age){
 this._firstName=firstName;   
 this._lastName=lastName;
 this._age=age;
}



get firstName() {  // "get" es la palabra clave utilizada para definir un método getter para recuperar el valor de la propiedad.
return this._firstName;
}

set firstName(value) { // "set" define un método setter para cambiar el valor de una propiedad específica.
this._firstName = value;
}

get lastName(){
return this._lastName;    
}

set lastName(value) {
this._lastName = value;
}

get age(){
return this._age;    
}

set age(value){
this._age = value;    
}

get fullName() {
    return this._firstName + ' ' + this._lastName;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
