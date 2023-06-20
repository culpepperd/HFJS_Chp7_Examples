// pg. 268 - testing for undefined
var x;
if (x == undefined) {
	console.log("x is: " + x);
}

// testing an non-existing object property
var customer = {
	name: "Jenny"
};
if (customer.phoneNumber == undefined) {
	console.log("customer.phoneNumber is: " + customer.phoneNumber);
}


/********************************************************************************************/

/*
var phoneNumber = "123-4567";
console.log("Larry's code determines the phone number validity is: " + validateLarry(phoneNumber));
console.log("Brad's code determines the phone number validity is: " + validateBrad(phoneNumber));


// Larry's code to determine if string is acceptable phone number
function validateLarry(phoneNumber) {
	if (phoneNumber.length !== 8) {
		return false;
	}
	for (var i = 0; i < phoneNumber.length; i++) {
		if (i === 3) {
			if (phoneNumber.charAt(i) !== '-') {
				return false;
			}
		} else if (isNaN(phoneNumber.charAt(i))) {
			return false;
		}
	}
	return true;
}


// Brad's code to determine if string is acceptable phone number
// Brad's code uses several methods of the string object:
// substring => returns a portion of a string
// charAt() => gets a character at a particular index in the string
// Brad's code also uses the isNaN() function to determine if the 
// sequence of numbers is a actually a sequence of numbers
function validateBrad(phoneNumber) {
	if (phoneNumber.length !== 8) {
		return false;
	}
	var first = phoneNumber.substring(0, 3);
	var second = phoneNumber.substring(4);
	if (phoneNumber.charAt(3) !== "-" || isNaN(first) || isNaN(second)) {
		return false;
	}
	return true;
}
*/