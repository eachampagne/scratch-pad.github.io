// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base.
 */

/*
 * I: a base value, either a number or a string
 * O: a function that compares its input value to the base provided at construction
 * C: N/A
 * E: N/A
 */
function createGreaterThanFilter(base) {
	// YOUR CODE BELOW HERE //
	
	//return a function that takes in a value and returns a boolean based on whether that value is greater than base
	return function(value) {
		return value > base;
	}

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base. (test means return true or false)
 *
 */

/*
 * I: a base value, either a number or a string
 * O: a function that compares its input value to the base provided at construction
 * C: N/A
 * E: N/A
 */
function createLessThanFilter(base) {
	// YOUR CODE BELOW HERE //

	//return a function that takes in a value and returns a boolean based on whether that value is less than base
	return function(value) {
		return value < base;
	}

	// YOUR CODE ABOVE HERE //
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 *
 * This function needs to be case insensitive.
 */

/*
 * I: a character
 * O: a function that tests whether a string starts with that character 
 * C: N/A
 * E: N/A
 * */
function createStartsWithFilter(startsWith) {
	// YOUR CODE BELOW HERE //

	//return a function that takes a string and returns a boolean based on whether the first character of the string matches the character determined at function construction
	return function(str) {
		//force both characters to lower case to eliminate case sensitivity
		return str[0].toLowerCase() === startsWith.toLowerCase();
	} 

	// YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 *
 * This function needs to be case insensitive.
 */

/*
 * I: a character
 * O: a function that tests whether a string ends with that character 
 * C: N/A
 * E: N/A
 * */
function createEndsWithFilter(endsWith) {
	// YOUR CODE BELOW HERE //

	//return a function that takes a string and returns a boolean based on whether the first character of the string matches the character determined at function construction
	return function(str) {
		//force both characters to lower case to eliminate case sensitivity
		return str[str.length - 1].toLowerCase() === endsWith.toLowerCase();
	} 

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection.
 */

/*
 * I: an array of strings and a function to modify them
 * O: an array consisting of the results of modifying the input strings with the modify functions
 * C: N/A
 * E: N/A
 */
function modifyStrings(strings, modify) {
	// YOUR CODE BELOW HERE //

	//initialize empty array to collect results
	let modified = [];

	//loop over every element in the array of strings
	for (let i = 0; i < strings.length; i++) {
		//apply the modify function to the string at index i, and push the result into the modified array
		modified.push(modify(strings[i]));
	}

	//return array of modified strings
	return modified;

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */

/*
 * I: an array of strings and a test function
 * O: a boolean that is true if all strings in the input array pass the test and false otherwise
 * C: N/A
 * E: N/A
 */
function allStringsPass(strings, test) {
	// YOUR CODE BELOW HERE //
	
	//loop over every element in the array of strings
	for (let i = 0; i < strings.length; i++) {
		//apply the test function to the element at index i
		if (!test(strings[i])) {
			//if even one element fails, return false immediately. No need to keep testing
			return false;
		}
	}
	//if the loop completes, then the test must have passed on every element, so return true
	return true;

	// YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
	typeof process !== 'undefined' &&
	typeof process.versions.node !== 'undefined'
) {
	// here, export any references you need for tests //
	module.exports.createGreaterThanFilter = createGreaterThanFilter;
	module.exports.createLessThanFilter = createLessThanFilter;
	module.exports.createStartsWithFilter = createStartsWithFilter;
	module.exports.createEndsWithFilter = createEndsWithFilter;
	module.exports.modifyStrings = modifyStrings;
	module.exports.allStringsPass = allStringsPass;
}
