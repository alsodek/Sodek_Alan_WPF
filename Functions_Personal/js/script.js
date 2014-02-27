// Alan Sodek
// February 27, 2014
// Functions Personal

// How many bags of mulch can you fit in the trunk of your car?



function space(lengh, width, height){
	// Bags take up 5 sq. ft.
	var bags = 5;
	// Find Area of trunk by multiplying length, width and height.
	var trunk = length * width * height;
	// Divide the space of the trunk by the space of the bags.
	var trunkSpace = trunk/bags;
	// Return the results to the total variable.
	return trunkSpace;
}

// Tells the function the parameters.
var total = space(20, 11, 8);

//Print out result.
console.log("You can fit " + total + " bags into your trunk.");
