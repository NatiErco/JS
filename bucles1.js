// Cree una función denominada calculateSalary que tome un parámetro de entrada y calcule y devuelva el salario correspondiente. Debe utilizar la switchdeclaración de cambio. Para cada puesto el salario correspondiente es el siguiente:

//  ceo => 2200€
//  manager => 1800€
//  cto => 1800€
//  developer => 1500€
//  default => 1000€

function calculateSalary(role) {
    switch(role) {
        case "ceo":
            console.log(2200);
            break;
        case "manager":
            console.log(1800);
            break;
        case "cto":
            console.log(1800);
            break;
        case "developer":
            console.log(1500);
            break;
        default:
            console.log(1000);
            break;
    }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('repartidor');

