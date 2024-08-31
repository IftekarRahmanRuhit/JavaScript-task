/* 
Task-02
---------------------------------------------------
Declare an array of 3 tourist destinations
Add a new tourist destination to your tourist array
Add two more to your array
Remove the last tourist destination you have added
display the final array as output
----------------------------------------------------
*/
let place = ["Cox's Bazar","Sundarbans","Srimangal"];

place.push("Bandarban");
place.push("Rangamati","Kuakata");
place.pop();

console.log(place);