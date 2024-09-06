/*
Task-4

Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

 */
function countZero(numbers){
    let count=0 ;

    for(let number of numbers){
        if(number==="0"){
            count++;
        }
    }
    return count;
}

const strOfNumbers = "0110101000";
const totalZero = countZero(strOfNumbers);
console.log("There are",totalZero,"zero");