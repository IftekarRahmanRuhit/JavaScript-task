/*
Task-1:

Write a function to convert temperature from Celsius to Fahrenheit.

 */

function celciousToFahrenheit(temparature){
    const fahrenheit = (temparature * (9 /5)) + 32;
    return fahrenheit;
}

const convertedTemparature = celciousToFahrenheit(37);
console.log(convertedTemparature.toFixed(2));