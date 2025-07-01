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

/*
 * I: an object
 * O: an array containing the object's values
 * C: N/A
 * E: N/A
 * */
function getObjectValues(object) {
	// YOUR CODE BELOW HERE //
	// create empty array to hold values
	let values = [];

	//use for-in loop to iterate over object's keys
	for (let key in object) {
		//push the value corresponding to the key to the values array
		values.push(object[key]);
	}
	// return array of values
	return values;
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, loop over the Object and print its values
 * using console.log().
 */

/*
 * I: an object
 * O: logs the object's values, but returns nothing
 * C: N/A
 * E: N/A
 * */
function printObjectValues(object) {
	// YOUR CODE BELOW HERE //

	//use for-in loop to iterate over object's keys
	for (let key in object) {
		//log the value corresponding to the key
		console.log(object[key]);
	}

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

/*
 * I: an object
 * O: a number corresponding to the number of key/value pairs in the object
 * C: N/A
 * E: N/A
 * */
function getObjectLength(object) {
	// YOUR CODE BELOW HERE //
	//use Object.keys to get an array of the object's keys, then return its length property
	return Object.keys(object).length;

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input Object, how might we loop over the Object IN REVERSE and
 * print its values using console.log()?
 */

/*
 * I: an object
 * O: logs the object's values in reverse, but returns nothing
 * C: N/A
 * E: N/A
 * */
function printObjectValuesInReverse(object) {
	// YOUR CODE BELOW HERE //
	
	//call getObjectValues function to get an array of values on the object, and assign it to values
	let values = getObjectValues(object);

	//pass values to printArrayValuesInReverse to log the values in reverse order
	printArrayValuesInReverse(values);

	//this could have been one line: printArrayValuesInReverse(getObjectValues(object))

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
