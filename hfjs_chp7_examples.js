function runPage() {
/*	
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
	var test11 = 0 / 0;
	
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
	console.log("0/0 is of type: " + typeof test11);
*/	

	/********************************************************************************************/

	/*
	// pg. 271 - using null
	var header = document.getElementById("header");
	if (header == null) {
		console.log("The header object is: " + header);
	} else {
		console.log("The header object is: " + header);
	}

	console.log("The header is of type: " + typeof header);
	*/

	/********************************************************************************************/

	/*
	// pg. 272 - NaN - Not a Number
	var a = 0 / 0;
	console.log("0/0 evaluates to: " + a);
	if (isNaN(a)) {
		console.log("Used isNaN and it evaluates to: " + isNaN(a));
	}

	var b = "food" * 1000;
	console.log("\"food\" * 1000 evaluates to: " + b);
	if (isNaN(b)) {
		console.log("Used isNaN and it evaluates to: " + isNaN(b));
	}

	var c = Math.sqrt(-9);
	console.log("Math.sqrt(-9) evaluates to: " + c);
	if (isNaN(c)) {
		console.log("Used isNaN and it evaluates to: " + isNaN(c));
	}
	*/

	/********************************************************************************************/

	// pg. 274 - example
	if (99 == "99") {
		console.log("A number equals a string!");
	} else {
		console.log("No way a number equals a string.");
	}

	// pg. 277 - examples of == Equality operator and JS conversion
	console.log("CASE #1: Comparing a number and a string: 99 == \"vanilla\" results in: " + (99 == "vanilla"));
	console.log("CASE #2.0: Comparing a boolean with any other type: 1 == true results in: " + (1 == true));
	console.log("CASE #2.1: Comparing a boolean with any other type: \"1\" == true results in: " + ("1" == true));
	console.log("CASE #3: Comparing null and undefined: undefined == null results in: " + (undefined == null));
	


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
}
window.onload = runPage;