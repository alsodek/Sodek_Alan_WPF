// Alan Sodek
// February 27, 2014
// Functions Personal

// How many bags of mulch can you fit in the trunk of your car?



function space(length, width, height){
	// Bags take up 5 cu. ft.
	var bags = 5;
	// Find Area of trunk by multiplying length, width and height.
	var trunk = length * width * height;
	// Divide the space of the trunk by the space of the bags.
	var trunkSpace = trunk/bags;
	// Return the results to the total variable.
	return trunkSpace;
}

// Tells the function the parameters.
var total = space(7, 4, 2);


if(total > 0){
	//Print out result if they can fit bags into their trunk.
	console.log("You can fit " + total + " bags into your trunk.");
}else{
	//Print out result if they can't fit any bags.
	console.log("You can't fit any bags in your trunk!");
}

