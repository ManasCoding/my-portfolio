// String Concatenation

var myName = "hello";
var myName1 = prompt("what is your name");
console.log(myName + " " + myName1);

//string length and retrieving the number of characters//

var myName2 = "mithun";
let myName3 = myName.length
console.log(myName3);

//you have written 182 character, you have -42 character left.

var tweet = prompt("compose your tweet:");
var tweet2 = tweet.length;
console.log("you have written " + tweet2 + " characters, " + "you have " + (180 - tweet2) + " character left.")

// Slicing and Extracting parts of a String//

var tweetUnder = prompt("compose your tweet");
var tweetUnder140 = tweetUnder.slice(0,140);
console.log(tweetUnder140);


//Word.toUpperCase();

var myName4 = prompt("what is your name");
myName5 = myName4.toUpperCase();
console.log(myName5);

//hello, Mithun only 1st later capital
var myName6 = prompt("what is your name: ")
var firstChar = myName6.slice(0,1);
var upperCaseFirstChar = firstChar.toUpperCase();
var restName = myName6.slice(1,myName6.length);
var lowerCase = restName.toLowerCase();
var capitalName = upperCaseFirstChar + lowerCase;
console.log("hello " + capitalName);

