/**
Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***
Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */


let sum=0;
// subtask-01

for(let i=91; i<=129; i+=2){
    sum = sum+i;
}
console.log("Sum of all the odd numbers from 91 to 129 :",sum);


// subtask-02

// for(let i=51; i<=85; i++){
//     if(i%2 == 0){
//         sum = sum+i;
//     }
// }
// console.log("Sum of all the Even numbers from 51 to 85 :",sum);
