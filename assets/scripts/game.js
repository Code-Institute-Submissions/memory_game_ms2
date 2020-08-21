// List of all cards by character
var cards = ["百", "千", "万", "上", "中", "下", "左", "右", "大", "小", "百", "千", "万", "上", "中", "下", "左", "右", "大", "小"];
// An empty array where values of open cards are pushed to compare.
var openCards = [];
// Variables defined to track number of moves
var flipped = 0;
var moveCount = 0;

// Function to shuffle an array - uses Fisher-Yates (aka Knuth) Shuffle
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// Define var array to contain result and to shuffle the card array
var shuffled = shuffle(cards);


// Statement to show start screen
$('.container').append('<div class="start_screen"><h4>A pattern matching game to help language students become familiar with Chinese pictograms. </h4><ul class="start_text"><li>Click on any card to reveal a pictogram, remember it</li><li>Click on another card to see if it is a match</li><li>Repeat until you have matched all the pictograms</li><li>The moves counter tells you how well you remember them</li><li>Less than 20 moves is awesome, less than 30 good, more than 30? PRACTICE MORE!</li><li>Click the  <i class="fas fa-chevron-right"></i> button to begin playing, you can restart <i class="fa fa-arrow-up"></i> or refresh <i class="fas fa-redo"></i> at any time</li></ul><div class="landing_panel"><button class="btn btn-secondary fas fa-chevron-right" id="start" type="start"></button> </div>');


// Click event to replace start start_screen with deck + cards
$("#start, #refresh").click(function() {
    $(".start_screen").replaceWith('<ul class="deck"></ul>');
    for (var i = 0; i < cards.length; i++) {
        $('.deck').prepend('<li class="card"></li>');
    }
    $('.card').prepend('<i></i>');

    for (var i = 0; i < cards.length; i++) {
        $('.card').eq(i).find('i').addClass(shuffled[i]);
    }
    $('.deck').append('<div class="game_panel"><button type="submit" class="btn btn-secondary fa fa-arrow-up" id="restart" onClick="refreshPage()"></button><div id="moves_label" > Moves: <span class="moves"> 0 </span> </div><button class="btn btn-secondary fas fa-redo" type="start" id="reset" onClick="refreshGame()"></button></div>')
});

// Click event to restart the game
function refreshPage() {
    window.location.reload();
}

// Function to toggle class of matched cards
function toggleMatch() {
    $('.card').filter($('.open')).toggleClass('open match');
    flipped = flipped + 2;
  //  moveCount = moveCount + 1;
    moveCount ++;
    $('.moves').text(moveCount);

}
// Function to close modal
function closeModal() {
    $(".congrat").remove();
}

// Function to remove open class from unmatched cards
function flipBack() {
    $('.card').filter($('.open')).toggleClass('open');
    openCards = [];
    moveCount ++;
    $('.moves').text(moveCount);
}
// Function to return card classes to initial state
function flipMatched() {
    $('.card').filter($('.match')).toggleClass('match');
    $('.card').filter($('.open')).toggleClass('open');
    openCards = [];
}
// Click event to refresh game without return to start_screen
function refreshGame() {
    // Returns card classes to initial state
    flipMatched();
    shuffled = shuffle(cards);
    for (var i = 0; i < cards.length; i++) {
        $('.card').eq(i).find('i').replaceWith('<i></i>');
        $('.card').eq(i).find('i').addClass(shuffled[i]);
    }
    // Resets move counter and display
    flipped = 0;
    moveCount = 0;
    $('.moves').text(moveCount);
}

// Event listener for flipping the cards when clicked on
$('.container').on('click', '.card', function(event) {
    /*Essential condition for flipping a card i.e. a card may be flipped only if class='card' is present this is always true and only one other card is open.*/
    if ($(this).attr('class') === 'card' && openCards.length < 2) {
        /*CLass name open added to clicked card and class (symbol) of open card is pushed to openCards array when one card is opened.*/
        if (openCards.length === 0) {
            $(this).toggleClass('open');
            openCards.push($(this).children().attr('class'));
        }
        // Class name of second opened card is toggled and class (symbol) pushed to openCards array
        else if (openCards.length === 1) {
            $(this).toggleClass('open');
            openCards.push($(this).children().attr('class'));
            /* Comparison of two open cards-If matched they toggle class match */
            if (openCards[0] === openCards[1]) {
                toggleMatch();
                openCards = [];
            } else {
                // To avoid flipping of more than two cards at a time and used to flip back cards that are not matching
                setTimeout(flipBack, 600);
            }
        }
        // After all tiles are matched show modal
        if (flipped === cards.length) {
            $('.container').prepend('<div class="congrat"></div>');
            $('.congrat').append('<div class="modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"> <div class="modal-header"> <button class="btn btn-outline-primary btn-sm fas fa-times close_modal_btn" type="start" id="close_modal" onClick="closeModal()"></button></div><div class= "modal-body"><div><h3 class="modal-title">Congratulations!</h3></div><p class="modal-message">You won !</p></div><div class="modal-image"><img src="assets/images/pngguru.com-1.png" alt="god of fortune" width="200" height="200"></div><div class="modal-footer"><div class="modal-element"><span class="modal_moves_label"> Moves taken:  </span><span class="moves"> 0 </span></div></div></div></div>');
            $('.moves').text(moveCount);

        }
    }
});
