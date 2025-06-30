// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

/**
 * I: a string
 * O: a number representing the length of the input string
 * C: N/A
 * E: N/A
 *
 */
function length(string) {
	// YOUR CODE BELOW HERE //
	// use length property to get length and return it
	return string.length;
	// YOUR CODE ABOVE HERE //
}
/**
 * Given an input String, return a new String forced to lowercase.
 */

/*
 * I: a string
 * O: the input string transformed to lowercase
 * C: Not sure if we're allowed to use toLowerCase()
 * E: string contains letters not in the basic Latin alphabet (à, etc)
 *
 */

function toLowerCase(string) {
	// YOUR CODE BELOW HERE //
	//easy way would be return string.toLowerCase()
	//another way would be to use charcodes
	
	//initialize new empty string
	let returnStr = "";
	//create string of lowercase alphabet
	let lowercase = "abcdefghijklmnopqrstuvwxyz";
	//create string of uppercase alphabet
	let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	
	//loop through every letter in the string. 
	for (let i = 0; i < string.length; i++) {
		//If it's in the uppercase string, concat the corresponding letter from the lowercase string onto returnStr
		if (uppercase.includes(string[i])) {
			let index = uppercase.indexOf(string[i]);
			returnStr += (lowercase[index]);
		} else {
		//Otherwise, concat letter as is (lowercase letters, spaces, punctuation, etc)
			returnStr += (string[i]);
		}
	}
	//return new string
	return returnStr;
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

/*
 * I: a string
 * O: the string coverted to uppercase
 * C: N/A
 * E: N/A, assuming toUpperCase() can handle special characters
 * */

function toUpperCase(string) {
	// YOUR CODE BELOW HERE //
	//since I've shown that I can write a function like this from scratch, this time I'll use the easy way
	//although another scratch solution would be to use character codes
	//return string coverted to upper case with toUpperCase() method
	
	return string.toUpperCase();
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *	toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *	enforce lowercase? Look at the global replace link below, or, try String
 *	methods split and join?
 *
 *	See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

/*
 * I: a string
 * O: the string converted to dash case - words are lowercased and separated by hyphens
 * C: should probably use my toLowerCase function
 * E: words separated by something other than spaces, like underscores
 *
 * */


function toDashCase(string) {
	// YOUR CODE BELOW HERE //
	
	//convert input string to lowercase (which leaves spaces and punctuation unchanged)
	let str = toLowerCase(string);
	//split string on spaces
	str = str.split(' ');
	//join string back together with dashes
	str = str.join('-');
	//return string
	return str;
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *	beginsWith('Max', 'm'); // => true;
 *	beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *	ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
	// YOUR CODE BELOW HERE //

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *	endsWith('Max', 'X'); // => true;
 *	endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *	ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
	// YOUR CODE BELOW HERE //

	// YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //

	// YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *	join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *	in an Array called args.
 */
function join(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //
	var args = Array.from(arguments);

	// YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *	longest("ben", "maggie");	 //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //

	// YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //

	// YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //
	
	// YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
	typeof process !== 'undefined' &&
	typeof process.versions.node !== 'undefined'
) {
	// here, export any references you need for tests //
	module.exports.length = length;
	module.exports.toLowerCase = toLowerCase;
	module.exports.toUpperCase = toUpperCase;
	module.exports.toDashCase = toDashCase;
	module.exports.beginsWith = beginsWith;
	module.exports.endsWith = endsWith;
	module.exports.concat = concat;
	module.exports.join = join;
	module.exports.longest = longest;
	module.exports.sortAscending = sortAscending;
	module.exports.sortDescending = sortDescending;
}
