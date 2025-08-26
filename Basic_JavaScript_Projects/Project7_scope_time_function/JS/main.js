/* Time-based method demo using new Date().getHours() */
 
function timeMessage() {
  const hour = new Date().getHours(); // 0–23
  let msg;

  if (hour < 12) {
    msg = "Good morning!";
  } else if (hour < 18) {
    msg = "Good afternoon!";
  } else {
    msg = "Good evening!";
  }

  // Output to the <p id="Greeting"> element
  document.getElementById("Greeting").innerHTML = msg + " (Hour: " + hour + ")";
}

/* (From earlier assignment) Scope + Debugging */
 
var globalVar = 100;

function useGlobal() {
  console.log("Using global variable: " + globalVar);
}
useGlobal();

function useLocal() {
  var localVar = 50;
  console.log("Using local variable: " + localVar);
}
useLocal();

// Intentional error wrapped so it doesn't stop execution oof my program
function causeError() {
  console.log("About to use an undefined variable (this is intentional)...");
  try {
    console.log(nonExistentVar); 
  } catch (e) {
    console.log("Caught error (as expected):", e.message);
  }
}
causeError();

/* Simple If Statement Example */

function checkNumber() {
  let number = 10; 
  if (number > 5) {
    console.log(number + " is greater than 5");
  }
}
checkNumber(); 

/* If / Else Statement Example */

function checkUserNumber() {
  let num = document.getElementById("UserNumber").value;

  if (num >= 10) {
    document.getElementById("Result").innerHTML = num + " is greater than or equal to 10.";
  } else {
    document.getElementById("Result").innerHTML = num + " is less than 10.";
  }
}

/* Else If Statement for time of day */

function Time_function() {
  var Time = new Date().getHours();
  var Reply;

  if (Time > 0 && Time < 12) {
    Reply = "It is morning time!";
  }
  else if (Time >= 12 && Time < 18) {
    Reply = "It is the afternoon.";
  }
  else {
    Reply = "It is the evening.";
  }

  document.getElementById("Time_of_day").innerHTML = Reply + " (Hour: " + Time + ")";
}