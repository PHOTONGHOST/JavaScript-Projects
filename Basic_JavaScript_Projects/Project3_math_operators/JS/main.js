// This file demonstrates using functions with math operators:

/**
 * Addition Function
 */
function addition_Function() {
    var result = 5 + 7; 
    document.getElementById("Math").innerHTML = "5 + 7 = " + result;
}

/**
 * Subtraction Function
 */
function subtraction_Function() {
    var result = 10 - 3; 
    document.getElementById("Math2").innerHTML = "10 - 3 = " + result;
}

/**
 * Multiplication Function
 */
function multiplication_Function() {
    var result = 6 * 8; 
    document.getElementById("Math3").innerHTML = "6 × 8 = " + result;
}

/**
 * Division Function
 */
function division_Function() {
    var result = 48 / 6; 
    document.getElementById("Math4").innerHTML = "48 ÷ 6 = " + result;
}

/**
 * Multiple Operators Function
 */
function multiple_Operators_Function() {
    var result = (5 + 3) * 10 / 2 - 4; 
    document.getElementById("Math5").innerHTML = "(5 + 3) × 10 ÷ 2 - 4 = " + result;
}

/**
 * Modulus Function
 */
function modulus_Function() {
    var result = 25 % 6; 
    document.getElementById("Math6").innerHTML = "25 ÷ 6 has a remainder of " + result;
}

/**
 * Negation Function
 */
function negation_Function() {
    var number = 10;
    var result = -number; 
    document.getElementById("Math7").innerHTML = "The negation of 10 is " + result;
}

/**
 * Increment Function
 */
function increment_Function() {
    var number = 7;
    number++;
    document.getElementById("Math8").innerHTML = "Incrementing 7 gives: " + number;
}

/**
 * Decrement Function
 */
function decrement_Function() {
    var number = 10;
    number--;
    document.getElementById("Math9").innerHTML = "Decrementing 10 gives: " + number;
}

/**
 * Random Number Function
 * Math.random() generates 0 ≤ value < 1
 * Also Multiply by 50 to get 0 ≤ value < 50
 * Also Add 1 to shift range → 1 ≤ value ≤ 50
 */
function random_Function() {
    var result = Math.floor(Math.random() * 50) + 1;
    document.getElementById("Math10").innerHTML = "Random number (1–50): " + result;
}