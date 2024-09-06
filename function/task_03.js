/*
Task-3

Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

 */

function make_avg(numbers){
    let sum=0 ;

    for(let number of numbers){
        console.log(number);
        sum += number;
    }
    let avg = sum / numbers.length;
    return avg;
}

const arrayOfNumbers = [5,10,15,20,25];
const avarage = make_avg(arrayOfNumbers);
console.log("Avarage is ",avarage);