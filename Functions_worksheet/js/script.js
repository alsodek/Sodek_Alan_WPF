// Alan Sodek 
// February 27, 2014
// Functions Worksheet

// Circumference

function calcCircumference(radius){
	// Multiply radius by 2 by pi (3.14159)
	var circumference = 2 * 3.14159 * radius;
	return circumference; //Return variable circumference to total
}

var total = calcCircumference(5);

console.log("The circumference of the circle is " + total + ".");



//Stung!

function beeStings(weight){
	// Multiply weight by bee stings (8.666666667)
	var stings= weight * 8.666666667;
	return stings; //Return variable stings to total
}

var total = beeStings(100);

console.log("It takes " + total + " bee stings to kill this animal.");

