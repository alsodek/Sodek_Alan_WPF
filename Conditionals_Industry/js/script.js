//Alan Sodek
//February 19, 2014
//Conditionals

//Will a desired image fit into a designated space.

//Constant space.
var space = 500;

//Ask for image size.
var image = prompt("How large is the image");


//
if(image === ""){
	//If the prompt is left blank let the user know.
	console.log("You forgot to input something!");
}

//Ternary to evaluate if the image is small enough.
(image < space) ? console.log("") : console.log("");