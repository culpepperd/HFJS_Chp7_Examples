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

// pg. 269 - "In The Laboratory" - investigating using the typeof operator
var subject = "Just a string";
var probe = typeof subject;
console.log("The subject variable is of type: " + probe);

var test1 = "abcdef";
var test2 = 123;
var test3 = true;
var test4 = {};
var test5 = [];
var test6;
var test7 = { "abcdef": 123 };
var test8 = ["abcdef", 123];
function test9() { return "abcdef" };
var test10 = null;

console.log("\"abcdef\" is of type: " + typeof test1);
console.log("123 is of type: " + typeof test2);
console.log("true is of type: " + typeof test3);
console.log("{} is of type: " + typeof test4);
console.log("[] is of type: " + typeof test5);
console.log("   is of type: " + typeof test6);
console.log("{ \"abcdef\": 123 } is of type: " + typeof test7);
console.log("[\"abcdef\", 123] is of type: " + typeof test8);
console.log("function test9() is of type: " + typeof test9);
console.log("null is of type: " + typeof test10);

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