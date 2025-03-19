/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.



let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

*/

//Fixed code

//Part 1: 
//1. Explicitly convert string 5 to number 5 substracting would have forced the conversion but this conversion gives more clarity
let result = Number("5") - 2;  // 3
console.log("The result is: " + result); //The result is: 3

//2. Conversion of string "false" to boolean as Boolean("false") is truthy and will return "This is valid!" but doe to this conversion the boolean will be false and execute else statement i.e "This is not valid!"
let isValid = JSON.parse("false");  
if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is not valid!"); // "This is not valid!"
}

// 3. when it is age = "25" the output of the totalAge will be 255 which is not the expected result instead by converting the age to number the output will be correct i.e 30
let age = "25";
let totalAge = Number(age) + 5; // 30
console.log("Total Age: " + totalAge) // Total Age: 30


// Implicit Conversion Example:

let implResult = "10" * 2;  // The multiplication operator "*" forces the string "10" to be converted to a number.
console.log("After implicit conversion: " + implResult);  // 20

// Explicit Conversion Example:
let NumberString = "123"; // valid number string
let expliNumber = Number(NumberString);  // explicitly converts string to a number
console.log("Explicitly converted '123' to number:", expliNumber);  // 123

// Edge Case:
let nonNumberString = "Edge Case";
let invalidConversion = Number(nonNumberString);  
console.log("Converting 'Edge Case' results in:", invalidConversion);  //  NaN
