/*
Task-4

Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming

*/

function longestWord(str){
    const words = str.split(" ");
    let longest = "";

    for(const word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}

const string = " I am learning Programming to become a programmer"

const output = longestWord(string);

console.log("Longest word is " + output);