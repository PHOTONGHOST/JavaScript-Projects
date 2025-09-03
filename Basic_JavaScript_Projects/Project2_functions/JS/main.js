// Project2_functions - main.js
// This files purpose is to demonstrates a function that uses the += operator,

/**
 * This will Append more text to the paragraph each time the button is clicked.
 */ 
function appendMessage() {
  // Grab the element where it will display the message
  var p = document.getElementById("output");

  // (Each click adds another phrase and a space)
  p.innerHTML += "Hello, world! ";
}