// Alan Sodek
// February 27, 2014
// Functions Industry

// Will the picture fit into the space?

var space = function(){
	// Ask the user for the length.
	var length = prompt("What is the length of the picture?");
	// Ask the user for the width of the picture.
	var width = prompt("What is the width of the picture?");
	// Calculate the area by multiplying length by width.
	var area = length * width;
	// Return the area results.
	return area;
}

var a = space();

var spaceArea = 375000;

//This is if the user enters an empty prompt.
if(length === ""){
	//If the prompt is left blank let the user know.
	console.log("You forgot to input something!");
}else if(a > spaceArea){
	// If the picture is larger than the area let the user know.
	console.log("Your picture is too large!");
}else{
	// The picture is smaller than the area and can fit.
	console.log("Your picture will fit!");
}

