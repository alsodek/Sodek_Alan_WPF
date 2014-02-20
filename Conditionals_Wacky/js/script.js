//Alan Sodek
//February 19, 2014
//Conditionals

//What activity to do depending on what time of day it is.

//Ask what time of day it is.
var time = prompt("What time of day is it?");

//Ask for a.m. or p.m..
var day = prompt("Is it a.m. or p.m.?");

//This is if the user enters an empty prompt.
if(time === ""){
	//If the prompt is left blank let the user know.
	console.log("You forgot to input something!");
}else if(day === ""){
	//If the prompt is left blank let the user know.
	console.log("You forgot to input something!");
}else if(time <= 5 && day === "a.m."){
	//If it is 5 or earlier in the morning you will sleep.
	console.log("You should go to sleep!");
}else if(time >= 6 && day === "a.m."){
	//If it is 6 or later in the morning you will go to school.
	console.log("It is time to go to school.");
}else if(time <= 5 && day === "p.m."){
	//If it is 5 or earlier in the afternoon you will go to the movies.
	console.log("Time to relax and go to the movies.");
}else if(time >= 6 && day === "p.m."){
	//If it is 6 or later in the afternoon you will do homework.
	console.log("It's time to work on some homework.");
}