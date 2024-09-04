/*
Task-05

 Loop through an object and print the key-value pairs with their types

Input:

let myObject = {

name: 'John Doe',
age: 25,
city: 'Example City',
isStudent: true
};

Output:

key: name | type:  string
key: age | type:  number
key: city | type:  string
key: isStudent | type:  boolean

 */

let data = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };

    for(let key in data){
        console.log(`key: ${key} | type : ${typeof data[key]}`);
    }