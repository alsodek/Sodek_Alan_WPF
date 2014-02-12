//Alan Sodek
//February 12, 2014
//Expressions

//I work for a landscape nursery and this is a problem that i frequently run into.
//How much soil will it take to fill a garden box?

var length = prompt("We will be finding the volume of a rectangluar garden box. \nWhat is the length of the box?"); //Ask for the lenght of the box.

var width = prompt("What is the width of the box?"); //Ask for the width of the box.

var height = prompt("What is the height of the box?"); //Ask for the height of the box.

var volume = length * width * height; //Multiply lenght * width * height to find the volume.

console.log("The volume of the box is " + volume + " cu. ft.");