// This file's purpose is to demonstrates a simple function with variables and getElementById

function combineStrings() {
    // Our two variables
    var part1 = "Hello, ";
    var part2 = "world!";

    // Concatenating the variables into a sentence
    var sentence = part1 + part2;

    // Output of the sentence into the paragraph with id="output"
    document.getElementById("output").innerHTML = sentence;
}