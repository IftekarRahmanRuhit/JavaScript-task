/*
Task-2

You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2

 */

function repeated(numbers ,num){
    let count = 0;
    for( const number of numbers){
        if(number === num){
            count++
        }
    }
    return count;
}

const array = [10, 5,5, 5,15,20,20, 56,10,85,56];
const num = 5;
const  result = repeated(array,num);
console.log( num + " is repeated " + result +" times");