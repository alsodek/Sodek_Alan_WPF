//Average the Shopping bill
var groceryTotals = [100, 115, 97, 122, 103];
var totalSpent = groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4];
var averageSpent = (groceryTotals[0] + groceryTotals[1] + groceryTotals[2] + groceryTotals[3] + groceryTotals[4])/5;

//Display the info
console.log("You have spent a total of $" + totalSpent + " " + "on groceries over 5 weeks. That is an average of $" + averageSpent + " " + "per week.");



//Calculate the discounted price for an item.
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
console.log("Your" + " " + description + " " + "were originally $" + original + ", but after a $" + finalDiscount + " " + "discount, it is now $" + withoutTax + ", and $" + withTax + " " + "with tax.");
