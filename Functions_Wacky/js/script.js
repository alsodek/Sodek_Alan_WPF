// Alan Sodek
// February 27, 2014
// Functions Wacky

// How many trees can you fit in your front yard?

function findTrees(length, width){
	// Tree takes up 10 sq. ft.
	var tree = 10;
	// Calculate area by multiplying length by width.
	var area = length * width;
	// Calculate how many trees can fit by dividing area by trees.
	var totalTrees = area/tree;
	// Return results to total variable.
	return totalTrees;
}

var total = findTrees(1, 1);

final = (total > 1 ) ? "You can put in " + total + " trees." : "You don't have enough room for a tree!";

console.log(final);
