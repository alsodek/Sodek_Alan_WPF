// Alan Sodek
// February 27, 2014
// Functions Industry

// Will the picture fit into the space?

var space = function(length, width){
	// Calculate the area by multiplying length by width.
	var area = length * width;
	// 
	
}

var spaceArea = 375000;

//This is if the user enters an empty prompt.
if(length === "" || width === ""){
	//If the prompt is left blank let the user know.
	console.log("You forgot to input something!");
}else if(area > spaceArea){
	// If the picture is larger than the area let the user know.
	console.log("Your picture is too large!");
}else{
	// The picture is smaller than the area and can fit.
	console.log("Your picture will fit!");
}


var a = space(500, 750);
