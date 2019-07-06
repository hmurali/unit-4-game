/* Generating a random number between 19 and 120 inclusive and 
assigning it to targetNumber.
*/
var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
$("#number-to-guess").text(targetNumber);
numOptionsArrayForMyCrystalGame();

// Keeping track of player's score. Initialized to 0.
var counter = 0;
$("#total-score").text(counter);
// Keeping track of player's wins. Initialized to 0.
var numWins = 0;
$("#wins").text(numWins);
// Keeping track of player's losses. Initialized to 0.
var numLosses = 0;
$("#losses").text(numLosses);

// This time, our click event applies to every single crystal on the page. Not just one.
$(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter.

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    //alert("You clicked: " + crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);
    $("#total-score").text(counter);
    if (counter === targetNumber) {
        //alert("You win!");
        numWins++;
        $("#wins").text(numWins);
        $("#win-lose").text("You win!");
        resetGame();
    } else if (counter >= targetNumber) {
        //alert("You lose!");
        numLosses++;
        $("#losses").text(numLosses);
        $("#win-lose").text("You lose!");
        resetGame();
    }
});

function numOptionsArrayForMyCrystalGame() {
    // Creating an empty array: numberOptions.
    var numberOptions = [];

    /* Dynamically populating the array, numberOptions with four random unique 
    numbers between 1 and 12 inclusive.
    */
    while(numberOptions.length < 4) {
        var r = Math.floor(Math.random()*12) + 1;
        if(numberOptions.indexOf(r) === -1) numberOptions.push(r);
    }
    //document.write(numberOptions + " ");
    //document.write("length of numberOptions: " + numberOptions.length);
    // removing crystals for every numberOption
    for(var i = 0; i < numberOptions.length; i++){
        console.log($("#crystals").children());
        //$("#crystals").children("img.crystal-length").remove();
        $("#crystals").html("");
    }
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
    console.log("numberOptions: " + numberOptions);

}
function resetGame(){
    var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#number-to-guess").text(targetNumber);
    $("#wins").text(numWins);
    $("#losses").text(numLosses);
    counter = 0;
    $("#total-score").text(counter);
    console.log("I'm called");
    numOptionsArrayForMyCrystalGame();
}