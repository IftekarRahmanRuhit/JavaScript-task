/*
Task 4 

Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

*/

const statement = 'I am a hard working person'
const splitWords = statement.split(' ');
// console.log(splitWords);

const reversedWords = splitWords.reverse();
// console.log(reversedWords);

const reversedStatement = reversedWords.join(" ")
console.log(reversedStatement);

