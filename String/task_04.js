/*

Capitalize Every first Letter of each word in a String

*/

const myName ="iftekar rahman ruhit";

const studentName =myName.split(" ");

for(let i=0; i<studentName.length; i++){
    studentName[i] = studentName[i][0].toUpperCase() + studentName[i].substring(1);
}

const formattedName = studentName.join(" ");
console.log(formattedName);

