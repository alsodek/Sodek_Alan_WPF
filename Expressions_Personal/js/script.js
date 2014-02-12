//Alan Sodek
//February 12, 2014
//Expressions-Personal

//How much will you spend on fuel on a road trip.
var miles = prompt("We are calculating how much you will spend on fuel for a road trip. \nHow many miles will the trip be?"); //Ask how many miles the road trip is.
var mpg = prompt("How many miles per gallon does your car get?"); //Ask how many miles per gallon their car gets.
var price = prompt("What is the current price of fuel per gallon? (exclude $)"); //Ask the current price of fuel.

var finalMiles = miles/mpg; //Divide the miles by the mpg.
 
var finalPrice = finalMiles * price ; //Multiply by the price.

console.log("You will spend $" + finalPrice + " on fuel for this trip."); //Print the result.

