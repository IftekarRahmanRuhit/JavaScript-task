/* 
Count how many times a string has the letter a

*/

const text = "JavaScript is amazing";

let count = 0;

for(let i=0; i<text.length; i++){
    if(text[i] === "a"){
        count++;
    }
}
console.log(count);