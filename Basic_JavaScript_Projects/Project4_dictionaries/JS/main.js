// Demonstrating JavaScript Objects as Dictionaries with delete operator

/**
 * Function that creates a dictionary object,
 * then deletes a value, and tries to output it.
 */
function dictionary_Function() {
    // Create a dictionary (object) with some Key-Value Pairs
    var Car = {
        Make: "Toyota",
        Model: "Camry",
        Year: 2022,
        Color: "Blue"
    };

    // Delete the Model property
    delete Car.Model;

    // Try to output the deleted value
    document.getElementById("Dictionary").innerHTML = 
        "Car Model after delete: " + Car.Model;
}