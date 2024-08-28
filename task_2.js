/* 
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
*/

let studentName = "Iftekar Rahman Ruhit";
let mathemathics = 90;
let biology = 85.58;
let chemistry = 88;
let physics = 83;
let bangla = 76.29;

let totalMarks = mathemathics + biology + chemistry + physics + bangla;
let avarageMarks= totalMarks/5;

console.log("Student name : ",studentName);
console.log("Avarage Marks : ",avarageMarks.toFixed(2));
