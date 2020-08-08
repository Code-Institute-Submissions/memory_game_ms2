// List of all cards by character
var Cards = ["百","千","万","上","中","下","左","右","大","小","百","千","万","上","中","下","左","右","大","小"];
// An empty array where values of open cards are pushed to compare.
var OpenCards= [];
//An empty array where shuffled cards are stored.
var shuffleCards=[];
var tilesFlipped=0;
var numOfmoves=0;
console.log(Cards)
// Function to shuffle an array - uses Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
var currentIndex = array.length, temporaryValue, randomIndex;
while (currentIndex !== 0) {
randomIndex = Math.floor(Math.random() * currentIndex);
currentIndex -= 1;
temporaryValue = array[currentIndex];
array[currentIndex] = array[randomIndex];
array[randomIndex] = temporaryValue;
}
return array;
}
// shuffle the cards array
shuffleCards = shuffle(Cards);
console.log(Cards)

//function to show start screen
$('.container').append('<div class="start_screen"><h3>A pattern matching game to help language students become familiar with Chinese pictograms. </h3><ul><li>Click on any card to reveal a pictogram, remember it</li><li>Click on another card to see if is is a match</li><li>Repeat the process until you have matched all the pictograms</li><li>The moves counter tells you how well you remembered them</li><li>Less than 20 moves is awesome, less than 30 good, more than 30, practice more!</li><li>Click the start button to begin playing, you can restart at any time</li></ul><div><button class="btn btn-primary" id="start" type="start">Start</button> </div>');

// Click event to start the game
$('.start').click(function(){
location.load();
});
$( "#start, #restart" ).click(function() {
  $( ".container " ).replaceWith('<ul class="deck"></ul>');
   for (var i = 0;i < Cards.length;i++) {
   $('.deck').prepend('<li class="card"></li>');
   }
   $('.card').prepend('<i></i>');

   for (var i = 0;i < Cards.length;i++) {
   $('.card').eq(i).find('i').addClass(shuffleCards[i]);
   }
   $('.deck').append('<div><span class="moves"> 0 </span><button type="submit" class="btn btn-primary fa fa-repeat" id="restart" ></button><button type="submit" class="btn btn-primary fa fa-repeat" id="restart" onClick="refreshPage()"></button></div>')
 });

// Click event to restart the game
$('#restart').click(function(){
location.reload();
});
function refreshPage(){
    window.location.reload();
}
