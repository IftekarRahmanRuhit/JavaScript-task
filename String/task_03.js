/* 

If a given string has either x, replace x by y. if the given string has X, replace it by Y.

*/

let str = "This is an example with X and x"

let newStr = str.replace('x','y').replace('X','Y');

console.log(newStr);