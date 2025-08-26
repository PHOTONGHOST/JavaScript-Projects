/* ====== Ternary Operators ====== */
function Ride_Function() {
  var Height = document.getElementById("Height").value;
  var Can_ride = (Height < 52) ? "You are too short" : "You are tall enough";
  document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
  var Age = document.getElementById("Age").value;
  var canVote = (Age >= 18) ? "You are old enough" : "You are not old enough";
  document.getElementById("Vote").innerHTML = canVote + " to vote.";
}

/* ====== Constructor Function Example ====== */
function Vehicle(Make, Model, Year, Color) {
  this.Vehicle_Make = Make;
  this.Vehicle_Model = Model;
  this.Vehicle_Year = Year;
  this.Vehicle_Color = Color;
}

// Create Vehicle objects
var Jack  = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trailhawk", 2019, "White and Black");
var Erik  = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
  document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year + ".";
}

/* ====== Nested Function Example ====== */
function count_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();

  function Count() {
    let starting_point = 9;
    function Plus_one() { starting_point += 1; }
    Plus_one();
    return starting_point;
  }
}

/* ====== New and This Example ====== */
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

// Create a new Person object using the `new` keyword
var student = new Person("Alice", "Johnson", 21);

function newFunction() {
  document.getElementById("New_and_This").innerHTML =
    student.firstName + " " + student.lastName + " is " + student.age + " years old.";
}

/* ====== Nested Functions Example ====== */
function nested_Function() {
  document.getElementById("Nested_Function").innerHTML = Count();

  // Outer function
  function Count() {
    let starting_point = 5;

    // Inner function that modifies starting_point
    function add_two() {
      starting_point += 2;
    }

    add_two(); // call the inner function
    return starting_point; // return updated value
  }
}