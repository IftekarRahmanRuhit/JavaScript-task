/*

Task-3:

Write a function to count the number of vowels in a string.

*/

function countVowels(str){
    
    const vowels = ["a","e","i","o",'u'];
    let count = 0;
    for(let element of str.toLowerCase()){
        if(vowels.includes(element)){
            count++;
        }
}           
    return count; 
}

const text = "Iftekar Rahman Ruhit";
const output = countVowels(text);
console.log(output);

