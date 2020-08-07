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
$('.container').append('<div class="start_screen"><p>A pattern matching game to help language students become familiar with the appearance of Chinese pictogram characters. </p><ul><li>Click on any card to reveal a pictogram</li></ul></div>,');
