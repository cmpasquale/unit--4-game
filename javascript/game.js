// Pseudo Code
// Crystal Collector
// A random number is generated between 19-120
//Player selects between 4 crystals with random number that is generated in every game (win or lose)
// when crystals are clicked the value should be added up 
// if the sum equals the random number generated the player wins
// if it is not equal the player loses

var randomResult;
var loses = 0;
var win = 0;
var counter = 0;


 startGame = function(){
    $(".crystalscont").empty();

randomResult = Math.floor(Math.random() * 30) + 90;
console.log("Random number is " + randomResult);

$("#result").html("Random Result:  " + randomResult);

for (var i = 0; i < 4; i++) {
    var random = Math.floor(Math.random() * 10) + 2;
    console.log(random);
    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal', 
        "data-random": random
    });
    $(".crystalscont").append(crystal);
    
   
}


}

startGame();



$(".crystalscont").on("click", ".crystal" , function () {

   var num = parseInt ($(this).attr("data-random"));
    counter += num;$("#previous").html("Total Score: " + counter );

    console.log("this is the count " + counter);
    if (counter > randomResult) {
        loses++
        $("#loses").html("Loses: " + loses)
        alert("You Lost!")
        counter = 0;
        startGame()
    }
    else if (counter === randomResult) {
        win++
        $("#win").html("Wins: " + win)
        alert("You Won!")
        counter = 0;
        startGame()
    } 

    


});