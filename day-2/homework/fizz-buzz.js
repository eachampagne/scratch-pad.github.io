// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *	a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *	b. BUT, for multiples of three print “Fizz” instead of the number.
 *	c. AND for the multiples of five print “Buzz”.
 *	d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
 */

/*
 * I: N/A
 * O: logs either numbers or a message to the console, but returns nothing
 * C: N/A
 * E: N/A
 * */
function fizzBuzz() {
	// YOUR CODE GOES BELOW HERE //
	
	//loop over the numbers 1 to 100
	for (let i = 1; i <= 100; i++) {
		//declare empty string to build up message
		let message = "";

		//check if i is divisible by three
		if (i % 3 === 0) {
			//if so, add Fizz to message
			message += "Fizz";
		}
		//check if i is divisible by five
		if (i % 5 === 0) {
			//if so, add Buzz to message
			//for values divisible by both, this will automatically make message equal to "FizzBuzz" without having to check for % 15 explicitly
			message += "Buzz";
		}
		//check if message is truthy, i.e. non-empty
		if (message) {
			//if so, log the message
			console.log(message);
		} else {
			//if not, log the number
			console.log(i);
		}
	}
	
	// YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
	typeof process !== 'undefined' &&
	typeof process.versions.node !== 'undefined'
) {
	// here, export any references you need for tests //
	module.exports.fizzBuzz = fizzBuzz;
}
