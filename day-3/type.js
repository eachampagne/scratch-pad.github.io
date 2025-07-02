// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 *
 * HINT: There is a method that can help with this.
 */

/*
 * I: a value of unknown type
 * O: true if the input is an array, false otherwise
 * C: N/A
 * E: N/A
 */
function isArray(value) {
	// YOUR CODE BELOW HERE //
	// use Array.isArray method and return result
	return Array.isArray(value);
	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 *
 * HINT: look up how to figure out if something is an instance of the Date object.
 *
 */

/*
 * I: a value of unknown type
 * O: true if the input is an object intended as a collection, false otherwise
 * C: N/A
 * E: the typeof operator returns "object" for null, arrays, and dates 
 */
function isObject(value) {
	// YOUR CODE BELOW HERE //
	
	if (value === null) { //check if value is null
		//if so return false
		return false;
	} else if (Array.isArray(value)) { //check if value is an array
		//if so return false
		return false; 
	} else if (value instanceof Date) { //check if value is a date
		//https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
		//if so return false
		return false;
	} else if (typeof value === "object") { //check if value is type object
		//if so, return true since we've already eliminated null, array, and date
		return true;
	} else {
		//otherwise return false
		return false;
	}

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

/*
 * I: a value of unknown type
 * O: true if the input is an array or a collection object, false otherwise
 * C: N/A
 * E: typeof null and dates return "object"
 */
function isCollection(value) {
	// YOUR CODE BELOW HERE //

	//like isObject, but take out the check to return false for arrays
	//
	//could also just return isArray(value) || isObject(value)
	if (value === null) { //check if value is null
		//if so return false
		return false;
	} else if (value instanceof Date) { //check if value is a date
		//https://stackoverflow.com/questions/643782/how-to-check-whether-an-object-is-a-date
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
		//if so return false
		return false;
	} else if (typeof value === "object") { //check if value is type object
		//if so, return true since we've already eliminated null and date
		//typeof also returns "object" for arrays, so we don't have to check for them explicitly
		return true;
	} else {
		//otherwise return false
		return false;
	}

	// YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *	  - "string"
 *	  - "array"
 *	  - "object"
 *	  - "undefined"
 *	  - "number"
 *	  - "boolean"
 *	  - "null"
 *	  - "function"
 *	  - "date"
 *
 * Examples:
 *	  typeOf(134) -> "number"
 *	  typeOf("javascript") -> "string"
 *	  typeOf([1,2,3]) -> "array"
 */

/*
 * I: a value of unknown type
 * O: a string corresponding to the input's type
 * C: N/A
 * E: N/A
 */
function typeOf(value) {
	// YOUR CODE BELOW HERE //
	
	//first, check for all the types that don't align with the output from the typeof operator
	if (value === null) { //check if value is null
		//if so, return "null"
		return "null";
	} else if (Array.isArray(value)) { //check if value is an array
		//if so, return "array"
		return "array";
	} else if (value instanceof Date) { //check if value is a date
		//if so, return date
		return "date";
	} else { //other types will agree with their typeof results
		//so just return the result of typeof
		return typeof value;

		//actually I'd be surprised if array, date, and null really are the only types that return object when we consider them something else
		//but those are the only exceptions we've learned so far
	}

	// YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
	typeof process !== 'undefined' &&
	typeof process.versions.node !== 'undefined'
) {
	// here, export any references you need for tests //
	module.exports.isArray = isArray;
	module.exports.isObject = isObject;
	module.exports.isCollection = isCollection;
	module.exports.typeOf = typeOf;
}
