// List of all cards by character
var Cards = ["百","千","万","上","中","下","左","右","大","小","百","千","万","上","中","下","左","右","大","小"];
// An empty array where values of open cards are pushed to compare.
var OpenCards= [];
//An empty array where shuffled cards are stored.
var shuffleCards=[];
var cardsFlipped=0;
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
$('.container').append('<div class="start_screen"><h3>A pattern matching game to help language students become familiar with Chinese pictograms. </h3><ul><li>Click on any card to reveal a pictogram, remember it</li><li>Click on another card to see if is is a match</li><li>Repeat the process until you have matched all the pictograms</li><li>The moves counter tells you how well you have remembered them</li><li>Less than 20 moves is awesome, less than 30 good, more than 30? PRACTICE MORE!</li><li>Click the  <i class="fas fa-chevron-right"></i> button to begin playing, you can restart <i class="fas fa-chevron-left"></i> or refresh <i class="fas fa-repeat"></i> at any time</li></ul><div><button class="btn btn-primary fas fa-chevron-right" id="start" type="start"></button> </div>');

// Click event to start the game
//$('.start').click(function(){
//location.load();
//});


$( "#start, #refresh" ).click(function() {
  $( ".start_screen" ).replaceWith('<ul class="deck"></ul>');
   for (var i = 0;i < Cards.length;i++) {
   $('.deck').prepend('<li class="card"></li>');
   }
   $('.card').prepend('<i></i>');

   for (var i = 0;i < Cards.length;i++) {
   $('.card').eq(i).find('i').addClass(shuffleCards[i]);
   }
   $('.deck').append('<div><button type="submit" class="btn btn-primary fa fa-chevron-left" id="restart" onClick="refreshPage()"></button>Moves<span class="moves"> 0 </span><button type="submit" class="btn btn-primary fas fa-repeat" type="start" id="refresh" ></button></div>')
 });

// Click event to restart the game - unnecessary - to test
//$('#restart').click(function(){
//location.reload();
//});

function refreshPage(){
    window.location.reload();
}

//Event listener for flipping the cards when clicked on
   $('.container').on('click','.card',function (event) {

   /*Essential condition for flipping a card i.e. a card may be flipped only if class='card' is present which is true always and only one other card is open.*/
   if ($(this).attr('class')==='card' && OpenCards.length<2){
   /*CLass name of a open card is pushed to opencards array when only one card is opened.*/
   if (OpenCards.length===0) {
   $(this).toggleClass('open');
   OpenCards.push($(this).children().attr('class'));
   }
   /*If a card is open and next card is clicked */
   else if (OpenCards.length===1) {
   $(this).toggleClass('open');
   OpenCards.push($(this).children().attr('class'));
   /*Comparison of two open cards-If matched */
   if (OpenCards[0]=== OpenCards[1]) {
   $('.card').filter($('.open')).toggleClass('open match');
   //Increment the number of tilees flipped and number of moves if a pair is made.
   cardsFlipped=cardsFlipped + 2;
   numOfmoves=numOfmoves+1;
   $('.moves').text(numOfmoves);
   //Empty the array for comparison of next two cards.
   OpenCards= [];
   }
   else {
   // To avoid flipping of more than two cards at a time and used to flip back cards that are not matching
   function flipBack () {
   $('.card').filter($('.open')).toggleClass('open');
   OpenCards = [];
   numOfmoves=numOfmoves+1;
   $('.moves').text(numOfmoves);
   }
   setTimeout(flipBack, 600);
   }
   }

  // After all tiles are matched reload the game
   if (cardsFlipped === Cards.length) {

   $('.modal').css('display','block');
   }
 }
   });
