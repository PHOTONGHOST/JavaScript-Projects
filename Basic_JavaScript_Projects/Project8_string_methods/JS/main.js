/* Project 8 — concat() Method */

function concat_Function() {
    var part1 = "JavaScript ";
    var part2 = "string methods ";
    var part3 = "are powerful stuff";
    var whole_sentence = part1.concat(part2, part3);

    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Call function
concat_Function();

/* Project 8 — slice() Method */

function slice_Function() {
    var Sentence = "JavaScript is an amazing programming language.";
    var Section = Sentence.slice(0, 10); 
    document.getElementById("Slice_Result").innerHTML = Section;
}

/* Number ToString() Method */

function number_Function() {
    var num = 2025;
    var num_as_string = num.toString();
    document.getElementById("Number_to_String").innerHTML = 
        "Number as a string: " + num_as_string + " (type: " + typeof num_as_string + ")";
}

/* Number toPrecision() */

function precision_Function() {
    var num = 12345.6789;
    var precise = num.toPrecision(6);
    document.getElementById("Precision").innerHTML = 
        "Number with precision: " + precise;
}