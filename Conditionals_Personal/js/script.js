//Alan Sodek
//February 19, 2014
//Conditionals

//Can you afford the car you want?

//Cost of Car.
var car = 22000;

//How much money you have saved.
var savings = 20000;

//How much income you have per month.
var income = 3500;

//How much you have to pay for bills per month.
var bills = prompt("How much do you pay for bills per month?");

if(bills === ""){
	//If the prompt is left blank let the user know.
	console.log("You forgot to input something!");
}else if(savings + income - bills >= car){
	//If the savings plus income minus bills is greater than or equal to the car, you can afford the car.
	console.log("You can afford the car!");
}else{
	//If the amount is less than the car, you cannot afford the car.
	console.log("I'm sorry, but you cannot afford the car.");
}
