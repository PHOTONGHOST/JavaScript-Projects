/* While Loop */

function Call_Loop() {
    var text = "";
    var i = 1;

    // While loop that runs until i > 10
    while (i <= 10) {
        text += "Number " + i + "<br>";
        i++;
    }

    document.getElementById("Loop").innerHTML = text;
}

/* For Loop */

function for_Loop() {
    var Guns = [
        "M1 Garand",
        "Karabiner 98k",
        "Thompson Submachine Gun",
        "PPSh-41",
        "Sten Gun",
        "Browning M1919",
        "Arisaka Type 99"
    ];

    var Content = "";
    for (var i = 0; i < Guns.length; i++) {
        Content += Guns[i] + "<br>";
    }

    document.getElementById("List_of_Instruments").innerHTML = Content;
}

/* Array Function */

function array_Function() {
    var Artillery = [
        "German 88mm Flak Gun",
        "British QF 25-pounder",
        "American M101 Howitzer",
        "Soviet Katyusha Rocket Launcher",
        "Japanese Type 92 105mm Cannon",
        "Italian Cannone da 149/40",
        "French Canon de 75 modèle 1897"
    ];

    // Will display a single example (We will pick the 1st one)
    document.getElementById("Array").innerHTML = 
        "One of the most famous WWII artillery pieces: " + Artillery[0];
}

/* Const Keyword */

function constant_function() {
    // Create an object using const
    const Fighter = {
        name: "Supermarine Spitfire",
        topSpeed: "594 km/h",
        range: "1,135 km",
        armament: "8 × .303 Browning machine guns"
    };

    // Change a property value
    Fighter.topSpeed = "650 km/h";

    // Add a new property
    Fighter.role = "Interceptor";

    // Display a string using properties
    document.getElementById("Constant").innerHTML =
        "The " + Fighter.name + " had a top speed of " + Fighter.topSpeed +
        ", a range of " + Fighter.range +
        ", and was armed with " + Fighter.armament +
        ". It was primarily used as a " + Fighter.role + ".";
}

/* Let Keyword */

function let_Function() {
    // Using let keyword with three numbers
    let x = 12;
    let y = 8;
    let z = 5;

    let sum = x + y + z;

    // Display's the result
    document.getElementById("Let").innerHTML =
        "The sum of " + x + ", " + y + ", and " + z + " is " + sum + ".";
}

/* Object Example with Let Keyword */

function bomber_Function() {
    // Creates an object with let
    let Bomber = {
        name: "B-17 Flying Fortress",
        range: "3,219 km",
        defensiveArmament: "13 × 0.50 in (12.7 mm) M2 Browning machine guns",
        payload: "Up to 8,000 lb (3,600 kg) of bombs",
        topSpeed: "462 km/h",
        maxAltitude: "35,600 ft",
        
        // Method to actaully describe the bomber
        description: function() {
            return "The " + this.name + " had a range of " + this.range +
                   ", carried a typical payload of " + this.payload +
                   ", and could reach a top speed of " + this.topSpeed +
                   " with a maximum altitude of " + this.maxAltitude +
                   ". Its defensive armament included " + this.defensiveArmament + ".";
        }
    };

    // Display's the result in HTML
    document.getElementById("Bomber").innerHTML = Bomber.description();
}