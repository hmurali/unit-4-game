/* Generating a random number between 19 and 120 inclusive and 
assigning it to targetNumber.
*/
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#number-to-guess").text(targetNumber);

// Keeping track of player's score. Initialized to 0.
var counter = 0;

// Creating an empty array: numberOptions.
var numberOptions = [];

/* Dynamically populating the array, numberOptions with four random unique 
numbers between 1 and 12 inclusive.
*/
while(numberOptions.length < 4) {
    var r = Math.floor(Math.random()*12) + 1;
    if(numberOptions.indexOf(r) === -1) numberOptions.push(r);
}
document.write(numberOptions + " ");
document.write("length of numberOptions: " + numberOptions.length);

// Creating crystals for every numberOption
for(var i = 0; i < numberOptions.length; i++){
    // Creating an imageCrystal for each iteration.
    var imageCrystal = $("<img>");

    // Each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "assets/images/crystal.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all its classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
}

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter.

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    alert("You clicked: " + crystalValue);
});