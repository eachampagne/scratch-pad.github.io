// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/**
 * Given an input Array, loop forward over the Array and print its values
 * using console.log().
 */

/*
 * I: an array of values of any type
 * O: logs the values of the array, but returns nothing
 * C: N/A
 * E: N/A
 * */
function printArrayValues(array) {
	// YOUR CODE BELOW HERE //
	// loop over the array from beginning to end
	for (let i = 0; i < array.length; i++) {
		//log the element at index i
		console.log(array[i]);
	}
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Array, loop backwards over the Array and print its values
 * using console.log().
 */

/*
 * I: an array of values of any type
 * O: logs the values of the array, but returns nothing
 * C: N/A
 * E: N/A
 * */
function printArrayValuesInReverse(array) {
	// YOUR CODE BELOW HERE //
	// loop over the array from end to beginning
	for (let i = array.length - 1; i >= 0; i--) {
		//log the element at index i
		console.log(array[i]);
	}
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object keys.
 */

/*
 * I: an object
 * O: an array containg the object's keys
 * C: N/A
 * E: N/A
 * */
function getObjectKeys(object) {
	// YOUR CODE BELOW HERE //
	//use the Object.keys method to retrieve an array of keys, then return it
	return Object.keys(object);
	//could also use a for-in loop to assemble the array from scratch
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its keys
 * using console.log().
 */

/*
 * I: an object
 * O: logs the object's keys, but returns nothing
 * C: must loop over the object (so looping over Object.keys(object) wouldn't qualify)
 * E: N/A
 * */
function printObjectKeys(object) {
	// YOUR CODE BELOW HERE //
	//use a for-in loop to iterate over the object's keys
	for (let key in object) {
		//log the key to the console
		console.log(key);
	}
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
	// YOUR CODE BELOW HERE //

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */
function printObjectValues(object) {
	// YOUR CODE BELOW HERE //

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
	// YOUR CODE BELOW HERE //

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
	// YOUR CODE BELOW HERE //
	
	// YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
	typeof process !== 'undefined' &&
	typeof process.versions.node !== 'undefined'
) {
	// here, export any references you need for tests //
	module.exports.printArrayValues = printArrayValues;
	module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
	module.exports.printObjectValues = printObjectValues;
	module.exports.getObjectValues = getObjectValues;
	module.exports.getObjectKeys = getObjectKeys;
	module.exports.printObjectKeys = printObjectKeys;
	module.exports.getObjectLength = getObjectLength;
	module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
