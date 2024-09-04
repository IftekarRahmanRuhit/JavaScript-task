/*
Task 3

Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'

 */

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let str = '' ;

for(let i=0; i<numbers.length; i++){
   str += numbers[i];
}
console.log(str);


/*

Another method 

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];

let str = '' ;

for(let number of numbers){
   str += number;
}
console.log(str);

*/



