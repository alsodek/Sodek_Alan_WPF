//Alan Sodek
//February 11, 2014
//Expression Worksheet

//Dog Years
//Determine how old Sparky is in dog years.
var age = 4;

//multiply human years by 7
var dogYears = age * 7;

console.log("Sparky is " + age + " human years old wich is " + dogYears + " in dog years.");



//Slice of Pie
//Determine how many slices of pizza each person gets.
//set up the variables
var slices = 8;
var people = 10;
var pizzas = 3;

//Multiply pizzas by slices then divide by people.
var slicesPerPerson = pizzas * slices/people;

//Display the info.
console.log("Each person ate " + slicesPerPerson + " slices of pizza at the party.");



//Slice of Pie Part 2
//Determine how many pieces are left over for Sparky.
var sparkySlices = pizzas * slices%people;

//Display the info.
console.log("Sparky got " + sparkySlices + " slices of pizza.");



//Average the Shopping bill
//Create the array
var groceryTotals = [100, 115, 97, 122, 103]; 

//add the arrays together
var totalSpent = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4]; 

//add the arrays together then divide by 5
var averageSpent = (groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4])/5; 

//Display the info
console.log("You have spent a total of $" + totalSpent + " on groceries over 5 weeks. That is an average of $" + averageSpent + " per week.");



//Calculate the discounted price for an item.
//set up the variables
var original = 100;
var discount = .2;
var description = "Headphones";
var tax = .0625;

//Get the discount
var finalDiscount = original * discount;

//Subtract discount from origianl price.
var withoutTax = original - finalDiscount;

//Figure out the tax.
var finalTax = withoutTax * tax;

//Figure price with tax.
var withTax = withoutTax + finalTax;

//Print the output
console.log("Your " + description + " were originally $" + original + ", but after a $" + finalDiscount + " discount, it is now $" + withoutTax + ", and $" + withTax + " with tax.");
