// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //

/*
 * I: id (number), first and last names (string)
 * O: a contact object with the inputs and property values
 * C: N/A
 * E: N/A
 */
function makeContact(id, nameFirst, nameLast) {
	//create contact object and create properties based on the input
	let contact = {
		id: id,
		nameFirst: nameFirst,
		nameLast: nameLast
	};
	//return contact object
	return contact;
}

/*
 * I: N/A
 * O: ContactList object that keeps track of contacts and provides methods for interacting with the contact list
 * C: N/A
 * E: N/A
 */
function makeContactList() {
	/*
	 * You need something here to hold contacts. See length api for a hint:
	 */
	//create private contacts array within the scope of makeContactList()
	var contacts = [];

	//private utility function that takes a contact and returns a string that represents the contact's full name. Useful for searching/matching by full name
	let contactFullName = function(contact) {
		return contact.nameFirst + " " + contact.nameLast;
	}
	

	//return contact list object literal that contains methods for interacting with the contact list in a controlled way
	return {
		// we implemented the length api for you //
		
		//I: N/A, O: the length of the contacts array (number)
		length: function() {return contacts.length},
		
		//I: a contact object, O: N/A
		addContact: function(contact) {
			contacts.push(contact);
		},

		//I: the full name of a contact, O: the corresponding contact object, if it exists, or undefined otherwise, E: names with spaces
		findContact: function(fullName) {
			//Uses find method to test each contact for matching the provided full name
			//find() returns the full object that passes the test, or undefined if no element passes
			//therefore the result of the find() call can be returned directly
			//note that this interacts strangely with spaces
			//first: "Mary" and last "Anne Wheeler" and 
			//first: "Mary Anne" and last "Wheeler" both give
			//fullName: "Mary Anne Wheeler"
			//but it's better than splitting the provided fullName on spaces and getting ['Mary', 'Anne', 'Wheeler'] which will cause problems by having too many elements

			return contacts.find((elem) => contactFullName(elem) === fullName);
		},

		//I: a contact object, O: N/A, but removes a matching contact, if any
		removeContact: function(contact) {
			//check if contact is in contacts list
			if(contacts.includes(contact)) {
				//get index to use to splice
				let index = contacts.indexOf(contact);
				//use splice to edit contacts array
				contacts.splice(index, 1);
			}
		},

		//I: N/A, O: a new-line separated string of full names
		printAllContactNames: function() {
			//Step 1: use map and the contactFullName function to get an array of full names from the contacts array
			//Step 2: use the join method to convert the full name array into a single string separated by newlines. This also ensures there are neither leading nor trailing newlines
			//Step 3: return the string

			return contacts.map((elem) => contactFullName(elem)).join("\n");
		}
	};
}

// YOUR CODE GOES ABOVE HERE //

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
	typeof process !== 'undefined' &&
	typeof process.versions.node !== 'undefined'
) {
	// here, export any references you need for tests //
	module.exports.makeContact = makeContact;
	module.exports.makeContactList = makeContactList;
}
