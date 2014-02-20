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



//Tire Pressure
//Check to see if the front tires are the same pressure and the back tires are the same pressure.

//Set up the array.
var tires = [30, 30, 28, 28];

if(tires[0] === tires[1] && tires[2] === tires[3]){
	//If the front two tires are the same and back two are the same the tires pass spec!
	console.log("The tires pass spec!");
}else{
	//If either the front tires aren't the same or the back aren't the same you need to check your tires!
	console.log("Get your tires checked out!");
}









