// Alan Sodek
// February 19, 2014
// Conditionals Worksheet


//Celsius to Fahrenheit converter
//Convert the users temperature to the opposite unit.

//Ask for the temperature (just the number).
var degrees = prompt("What is the temperature? (just the number)");

//Ask if it is in Fahrenheit or Celsius.
var unit = prompt("Type 'F' for Fahrenheit or 'C' for Celsius.");

if(unit === "F"){
	//If it is in Fahrenheit subtract 32 then divide by 1.8.
	var fah = (degrees - 32)/1.8;
	//Print out the result in Celsius.
	console.log("The temperature is " + fah + " degrees Celsius.");
}else{
	//If is is in Celsius multiply by 1.8 then add 32.
	var cel = degrees * 1.8 + 32;
	//Print out the result in Fahrenheit.
	console.log("The temperature is " + cel + " degrees Fahrenheit.");
}



//Check the Login
//Check to see if the username and password are correct.

//Ask for the username.
var username = prompt("Enter your username:");

//Ask for the password.
var password = prompt("Enter your password:");

//Correct username
var correctUsername = "username";

//Correct password
var correctPassword = "password";

if(username === correctUsername && password === correctPassword){
	//If the username and password are correct welcome the user.
	console.log("Welcome, " + username + "!");
}else if(username != correctUsername){
	//If the username isn't correct tell the user.
	console.log("User not found. Try again.");
}else{
	//If the password isn't correct tell the user.
	console.log("Password does not match our records.");
}