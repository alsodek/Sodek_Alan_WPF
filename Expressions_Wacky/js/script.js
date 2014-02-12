//Alan Sodek
//February 12, 2014
//Expressions

//Find the average of 5 test grades.

var test0 = prompt("We will find the average of five test grades. \nWhat is the first test grade?"); //Ask for the first test grade.

var test1 = prompt("What is the second test grade?"); //Ask for the second test grade.

var test2 = prompt("What is the third test grade?"); //Ask for the third test grade.

var test3 = prompt("What is the fourth test grade?"); //Ask for the fourth test grade.

var test4 = prompt("What is the fifth test grade?"); //Ask for the fifth test grade.

var tests = [test0, test1, test2, test3, test4]; //The array.

var average = (Number(tests[0]) + Number(tests[1]) + Number(tests[2]) + Number(tests[3]) + Number(tests[4]))/5;

console.log(average);
