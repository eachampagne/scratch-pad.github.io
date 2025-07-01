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

/*
 * I: a string and a character
 * O: true if the input character matches the first character of the string (case insensitive); false otherwise
 * C: must be case-insensitive
 * E: N/A
 * */
function beginsWith(string, char) {
	// YOUR CODE BELOW HERE //
	//get first letter of string
	let firstLetter = string[0];

	//compare the lowercase versions of the first letter and the char - eliminates case problems
	if (firstLetter.toLowerCase() === char.toLowerCase()) {
		//return true if they're the same
		return true;
	} else {
		//otherwise return false
		return false;
	}
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

/*
 * I: a string and a character
 * O: true if the input character matches the last character of the string (case insensitive); false otherwise
 * C: must be case-insensitive
 * E: N/A
 * */

function endsWith(string, char) {
	// YOUR CODE BELOW HERE //
	//get last letter of string
	let lastLetter = string[string.length - 1];

	//compare the lowercase versions of the first letter and the char - eliminates case problems
	if (lastLetter.toLowerCase() === char.toLowerCase()) {
		//return true if they're the same
		return true;
	} else {
		//otherwise return false
		return false;
	}

	// YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

/*
 * I: two strings
 * O: one string that equals the two input strings concatenated together
 * C: N/A
 * E: N/A
 *
 * */
function concat(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //
	// concatenate the input strings with the plus operator, then return the output
	return stringOne + stringTwo;
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

/*
 * I: any number of strings
 * O: one string composed of all input strings joined together
 * C: N/A
 * E: N/A
 * */
function join(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //
	var args = Array.from(arguments);
	//use the array join method to join all strings together with no spacing characters, then return the result
	return args.join("");
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

/*
 * I: two strings
 * O: the longer of the two strings
 * C: N/A
 * E: strings could be the same length - instructions don't specify which to return in that case
 * */
function longest(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //
	//compare the length of the two strings using the length property
	if (stringOne.length > stringTwo.length) {
		//if the first string is longer, return it
		return stringOne;
	} else {
		//if the second string is longer, or if they are the same length, return the second string
		return stringTwo;
	}
	// YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
 * I: two strings
 * O: an integer: 1 if the first string comes first alphabetically, -1 if the second string comes first, 0 if they're equal
 * C: N/A
 * E: string could contain non-alphabetic characters - numbers, punctuation, etc
 * */
function sortAscending(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //
	//convert both strings to lowercase to elimate case sensitivity problems
	let string1Lower = stringOne.toLowerCase();
	let string2Lower = stringTwo.toLowerCase();

	//if the lowercase versions are the same, they are equal alphabetically, so return 0
	if (string1Lower === string2Lower) {
		return 0;
	}

	//if the two lowercase strings are not the same, compare letter by letter

	//first, figure out which string is shorter so we don't try to index characters past the end of the shorter string
	let shorterLength = Math.min(string1Lower.length, string2Lower.length);

	//loop over the characters in each string
	for (let i = 0; i < shorterLength; i++) {
		//get the numeric character code at index i from each string
		let charCode1 = string1Lower.charCodeAt(i);
		let charCode2 = string2Lower.charCodeAt(i);

		//A smaller charcode comes first
		//note that this puts 0-9 and most punctuation before a-z
		//since the function forces the alphabetic characters to lowercase, the only punctuation that would come after alphabetic characters are {|}~
		//source: ASCII chart on Wikipedia https://en.wikipedia.org/wiki/ASCII
		
		//compare the two charcodes
		if (charCode1 < charCode2) {
			//if charCode1 is smaller, string1 comes first alphabetically, so return 1
			return 1;
		} else if (charCode2 < charCode1) {
			//if charCode2 is smaller, string2 comes first, so return -1
			return -1
		}
		//if the charcodes are the same, return nothing and proceed with the next iteration of the loop
	}

	//if one word runs out of letters with no tie-breaker, then the shorter word comes first alphabetically
	//check if string1 is shorter
	if (string1Lower.length < string2Lower.length) {
		//if so return 1
		return 1;
	} else {
		//otherwise string2 must be shorter (since if they were the same length they should have hit a tiebreaker in the for loop), so return -1
		return -1;
	}

	// YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

/*
 * I: two strings
 * O: an integer: -1 if the first string comes first alphabetically, 1 if the second string comes first, 0 if they're equal
 * C: N/A
 * E: string could contain non-alphabetic characters - numbers, punctuation, etc
 * */
function sortDescending(stringOne, stringTwo) {
	// YOUR CODE BELOW HERE //

	// this is identical to sortAscending, except that return values of 1 and -1 are reversed
	// you could also implement this by invoking sortAscending, then returning the negative of its return value (which would leave 0 unchanged)

	//convert both strings to lowercase to elimate case sensitivity problems
	let string1Lower = stringOne.toLowerCase();
	let string2Lower = stringTwo.toLowerCase();

	//if the lowercase versions are the same, they are equal alphabetically, so return 0
	if (string1Lower === string2Lower) {
		return 0;
	}

	//if the two lowercase strings are not the same, compare letter by letter

	//first, figure out which string is shorter so we don't try to index characters past the end of the shorter string
	let shorterLength = Math.min(string1Lower.length, string2Lower.length);

	//loop over the characters in each string
	for (let i = 0; i < shorterLength; i++) {
		//get the numeric character code at index i from each string
		let charCode1 = string1Lower.charCodeAt(i);
		let charCode2 = string2Lower.charCodeAt(i);

		//A smaller charcode comes first
		//note that this puts 0-9 and most punctuation before a-z
		//since the function forces the alphabetic characters to lowercase, the only punctuation that would come after alphabetic characters are {|}~
		//source: ASCII chart on Wikipedia https://en.wikipedia.org/wiki/ASCII
		
		//compare the two charcodes
		if (charCode1 < charCode2) {
			//if charCode1 is smaller, string1 comes first alphabetically, so return 1
			return -1;
		} else if (charCode2 < charCode1) {
			//if charCode2 is smaller, string2 comes first, so return -1
			return 1
		}
		//if the charcodes are the same, return nothing and proceed with the next iteration of the loop
	}

	//if one word runs out of letters with no tie-breaker, then the shorter word comes first alphabetically
	//check if string1 is shorter
	if (string1Lower.length < string2Lower.length) {
		//if so return 1
		return -1;
	} else {
		//otherwise string2 must be shorter (since if they were the same length they should have hit a tiebreaker in the for loop), so return -1
		return 1;
	}

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
