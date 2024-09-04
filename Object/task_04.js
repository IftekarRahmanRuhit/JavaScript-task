/*
Task-04

Count the number of properties.

let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

 */

const student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};

const number_of_propertise = Object.keys(student).length;

console.log(number_of_propertise);