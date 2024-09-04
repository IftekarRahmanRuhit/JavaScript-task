/* 

Count how many times a string has the letter a or A

*/

const text = "JavaScript is Amazing";

let count = 0;

for(let i=0; i<text.length; i++){
    if(text[i] === "a" || text[i] === "A" ){
        count++;
    }
}
console.log(count);


