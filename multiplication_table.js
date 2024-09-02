/***

Generate a multiplication table for number 9

 */

let number=9;
let multiplication = 1;
for(let i=1; i<=10; i++){
    multiplication = number*i;
    console.log(`${number} x ${i} = ${multiplication}`);
}