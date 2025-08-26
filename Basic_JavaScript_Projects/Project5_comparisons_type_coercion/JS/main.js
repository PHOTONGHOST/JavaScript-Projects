// Project5_comparisons_type_coercion - main.js

// typeof example
var myVariable = 42;
document.getElementById("TypeOf").innerHTML =
    "The type of myVariable is: " + typeof myVariable;

// Example of NaN (Not a Number)
var notNumber = 0 / 0; 
document.getElementById("NaN_Example").innerHTML =
    "Example of NaN: " + notNumber;

// isNaN() returning true
document.getElementById("isNaN_True").innerHTML =
    "isNaN('Hello') returns: " + isNaN("Hello");

// isNaN() returning false
document.getElementById("isNaN_False").innerHTML =
    "isNaN(42) returns: " + isNaN(42);

// Infinity example (large number)
document.getElementById("Infinity_Example").innerHTML =
    "Example of Infinity: " + (2E310);

// -Infinity example (large negative number)
document.getElementById("NegInfinity_Example").innerHTML =
    "Example of -Infinity: " + (-2E310);

// Boolean logic examples
document.getElementById("Boolean_True").innerHTML =
    "10 > 2 evaluates to: " + (10 > 2);

document.getElementById("Boolean_False").innerHTML =
    "5 < 2 evaluates to: " + (5 < 2);

// Console.log example
console.log("The result of 15 * 3 is: " + (15 * 3));

// Double Equals examples (== with type coercion)
document.getElementById("DoubleEquals_True").innerHTML =
    "'10' == 10 evaluates to: " + ("10" == 10);

document.getElementById("DoubleEquals_False").innerHTML =
    "10 == 5 evaluates to: " + (10 == 5);

// Triple Equals examples (=== strict equality)

// 1. Return true (same type + same value)
document.getElementById("TripleEquals_True").innerHTML =
    "10 === 10 evaluates to: " + (10 === 10);

// 2. Return false (different type + different value)
document.getElementById("TripleEquals_False1").innerHTML =
    "'10' === 5 evaluates to: " + ("10" === 5);

// 3. Return false (different type but same value)
document.getElementById("TripleEquals_False2").innerHTML =
    "'10' === 10 evaluates to: " + ("10" === 10);

// 4. Return false (same type but different value)
document.getElementById("TripleEquals_False3").innerHTML =
    "7 === 10 evaluates to: " + (7 === 10);

// AND operator (&&)
document.getElementById("And_True").innerHTML =
    "(5 > 2 && 10 > 4) evaluates to: " + (5 > 2 && 10 > 4);

document.getElementById("And_False").innerHTML =
    "(5 > 10 && 10 > 4) evaluates to: " + (5 > 10 && 10 > 4);

// OR operator (||)
document.getElementById("Or_True").innerHTML =
    "(5 > 10 || 10 > 4) evaluates to: " + (5 > 10 || 10 > 4);

document.getElementById("Or_False").innerHTML =
    "(5 > 10 || 2 > 20) evaluates to: " + (5 > 10 || 2 > 20);

// NOT operator (!)
document.getElementById("Not_True").innerHTML =
    "!(5 > 10) evaluates to: " + !(5 > 10); 

document.getElementById("Not_False").innerHTML =
    "!(10 > 2) evaluates to: " + !(10 > 2); 