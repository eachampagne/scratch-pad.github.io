// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *	a. Create a function called range that takes two integers as
 *	parameters and returns an Array containing all integers
 *	between the two parameters, inclusively.  For example:
 *
 *	    range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *	If the first argument is greater than the second,
 *	return the range in reverse order, ie:
 *
 *	    range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *	TIPS:
 *	a. create something to collect the output you'll return.
 *	b. you'll need a loop, which one is best?
 *	c. you'll wanna make use of the push() method of Array.
 */

/*
 * I: two integers, which may or may not be ascending
 * O: an array containing all integers from start to end, inclusive
 * C: if the inputs are in descending order, the resulting array should be descending as well
 * E: the start and end integers could be equal to each other
 */
function range(start, end) {
	// YOUR CODE GOES BELOW HERE //
	
	//check if the start and end intergers are equal
	if (start === end) {
		//if so, return an array containing just that integer
		return [start];
	}

	//initialize empty array to collect results
	let results = [];

	//check if start is less than end
	if (start < end) {
		//if so, use a loop to count up to end
		for (let i = start; i <= end; i++) {
			//push each value of i onto the array
			results.push(i);
		}
	} else { //otherwise, end must be less than start (since we've already handled the ccase where they're equal)
		//in which case, use a loop to count down to end
		for (let i = start; i >= end; i--) {
			//push each value of i onto the array
			results.push(i);
		}
	}

	//return results array
	return results;
	
	// YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
	typeof process !== 'undefined' &&
	typeof process.versions.node !== 'undefined'
) {
	// here, export any references you need for tests //
	module.exports.range = range;
}
