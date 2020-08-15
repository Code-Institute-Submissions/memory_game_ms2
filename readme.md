
# Pictomatch - Chinese Pictogram Memory Game
Milestone Two Project: Interactive Frontend Development - Code Institute - Robert Jackson

This is a responsive mobile-first pattern matching game to assist beginner students of Chinese to become familiar with Chinese pictogram characters.


## Wireframes

The project wireframes were produced using figma and are provided
  +  [Mobile]()
  +  [Macbook]()

## UX
Game users want a fun way to learn to recognise Chinese pictogram characters.  The game is intended to be fun and is reflected by use of a vibrant colour theme and an element of humour in the modal image.
* The user lands on a screen explaining  the game's purpose, displaying instructions on game play and how to navigate the game.
The user then clicks the single button located at bottom right marked with a recognised forward symbol (right chevron) to progress to the game deck.
* This game presents as 20 blank cards behind which are ten pairs of randomly arranged Chinese pictograms (a number that represent a suitable subset of characters to learn to distinguish at one time - pictograms were chosen from a Google font library that represents approx 250 of the most commonly used modern Chinese characters).
* The game screen presents a 5*4  grid of empty cards providing a satisfying visual experience on  a mobile phone screen as (this is expected to be the main route of access/play - a responsive option to use alternative grids on larger devices such as desktops will be provided).  
When a first card is clicked the card flips to reveal a pictogram (the font chosen [Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC?subset=chinese-simplified) is one that is easy to recognise - similar to that used on Chinese metro signage). This card stays face up until the next action occurs.
* When the user clicks on the next card it also flips to face up, if they make a pair the cards remain open as matched (a change in background colour reflects this), if not matched both cards flip back to hide their pictograms. The move counter at the page foot increments.
* Game play continues in the same manner until all cards are matched, at this point a modal screen displays presenting a congratulations message and displaying a smiling image of the Chinese God of Fortune. The modal also displays the moves count for the game. The modal can be closed by clicking a button at top right.
* A single display of moves made (rather than time taken) at the game foot and on the modal provides both the visually simplest and most representative marker of game performance.
* At any time in play the card deck and counter can be reset by clicking a right-hand 'refresh' button (using a commonly recognised 'redo' icon) or the user can return to the instruction screen by use of the left-hand 'restart' button (up arrow icon).
* All game buttons show colour change responses on hover or click. Buttons are coloured to coordinate with the game theme. Buttons and the move panel change size responsively with device.


## Technologies

1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
      HTML5 is a software solution stack that defines the properties and behaviours of web page content
2. [CSS3](http://www.css3.info/)
      Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup
3. [Bootstrap (4.3.1)](https://getbootstrap.com/docs/4.3/getting-started/download/)
      Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development - provides new functions and can be accessed via CDN rather than using a library
4. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript)
      JavaScript is a light-weight, interpreted, object-oriented programming language used primarily for making interactive elements on web pages and applications. It was initially only used for browsers and web pages, but it has spread to many other environments and applications. See also [Puralsight](https://www.pluralsight.com/courses/quick-start-javascript-1-1870?aid=7010a000002BZNLAA4).
5. [JQuery (3.5.1)](https://blog.jquery.com/2020/05/04/jquery-3-5-1-released-fixing-a-regression/)
      [jQuery](https://jquery.com/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript.


## Features

### Required
* Define a set of cards to be matched
* Cards are to be shuffled on load or restart/reset
* Cards possess hidden, open or matched states
* Cards begin game in hidden state
* A card changes to open state on being clicked
* Game should know how to handle matched and unmatched cards
* Game should return unmatched card pairs to hidden state
* Game should display the current number of moves a user has made    
* A restart button should allow the player reset the game board.
* A start screen should introduce the game purpose and instructions for play
* Buttons should allow navigation between screens
* A congratulations modal should appear when the player matches all cards. The modal can be closed.

### Present:
All of the above features are present in this game.



## Testing

### Mentor recommendations

At the mid-project mentor meeting a number of problems were identified and I'm grateful to Ignatious for his assistance and experience in identifying them. These included

- bootstrap source errors - fixed by using script as source for bootstrap .js
- script tag outside HTML body - script tag moved to bottom of body
- missing html closing tag - tag replaced
- possible confusion between restart and back-navigation button due to icon used (chevron-left) -  icon replaced by up-arrow
- poor visual experience when viewing game on 4k monitor - set up media queries to make better use of large and extre large screen size
- poor placement of script src in header instead of bottom of HTML body - script link updated and moved


### Test protocols

Jasmine test:
  The Fisher-Yates (aka Knuth) Shuffle function was tested using Jasmine to ensure that an array of expected length was returned as well as additional tests, I am grateful to my mentor for this suggestion.

User test  
  Start_screen:
  1.  On landing verify start_screen container is visible
  2.  Verify text is visible
  3.  Verify that the 'start' button 'chevron-right' is visible
  4.  Hover over 'start' button and verify responses
  5.  Click 'start' button and verify start_screen is removed and game content loads

  Game:
  1.  Verify 20 empty cards are displayed as a 4x5 grid within deck (xs/sm/m) or 5x4 (lg/xl)
  2.  Check that game game_panel shows 'restart' and 'refresh' 'redo' buttons are visible and are located correctly
  3.  Hover over 'restart' button (lhd) confirm background colour changes
  4.  Check that when 'restart' is clicked the game deck is removed and replaced by the start_screen
  5.  Return to game deck verify that when clicked a card 'flips' to reveal a single pictogram character and background changes colour
  6.  Verify clicked card remains open
  7.  Verify that on clicking a second card 'flips' to reveal pictogram character
  8.  Verify that if cards are matched they stay open and both show a background colour change
  9.  Verify that if cards are unmatched they both 'flip' to close
  10. Verify that move counter increments by 1 after each pair of 'flips'.
  11. Hover over 'refresh' (rhd) confirm background colour changes
  12. Check that when 'refresh' btn is clicked the game deck returns all card to 'unflipped' appearance and the move counter is reset
  13. Click a card, verify flip, repeat for second and subsequent cards as above, note character distribution should show evidence of Shuffle
  14. Continue clicking until all cards are paired verify this loads 'Congratulations' modal

  Modal:
  1.  Check modal is all in frame, overlays deck, focused and contains 'close' btn at top right, 'Congratulations!' and 'you won!' text as well as 'fortune god' image and correct move number
  2.  Hover over 'close' btn' and verify response
  3.  Click on 'close' btn' and verify modal closes returning to game deck.


### Test Findings

This site was tested across multiple browsers (Chrome, Safari, Internet Explorer, FireFox) and on multiple mobile devices (iPhones 5,6-8,X;  iPad and iPad-pro, Chrome and Safari; pixel2+pixel2XL, Galaxy S9, One+5, Macbook, Asus and Jumper laptops; Chrome/Safari/Firefox) to ensure compatibility and responsiveness. A range of other devices were simulated using [Responsive DesignChecker.](https://responsivedesignchecker.com) and [The Responsinator](https://www.responsinator.com/).
As a result of these tests:
 - I found game 'restart'&'refresh' buttons and the close_modal_btn were incorrectly positioned in Chrome, it was solved using fix at https://stackoverflow.com/questions/30540750/displayflex-not-working-in-chrome
```
.class {
    display: inline-flex;
    width: 100%;
}
```
 -
 -
 -

Further iterative testing using these sites revealed other styling issues resolved by small edits or introduction of media queries to produce a better UX through responsive design;


### Peer Review



### Outstanding issues:
 - the Chinese characters used in the game do not display as clearly on Chrome as they do on Firefox - this needs to be addressed as it can affect the ease of their recognition.
 - the size of the modal appears to be limited by CSS media rules this means that on some very large devices the modal is too small for a satisfying appearance - I am still looking for a workaround to increase the size on the largest displays, however this is not a problem that will affect most anticipated (mobile device) users.


## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone [https://singeroi.github.io/memory_game_ms2/](https://singeroi.github.io/memory_game_ms2/)` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
All styling and content in the start_screen, deck and modal sections of the game were designed and written by me. A model game structure and specific components such as the 'shuffle' function were taken/adapted from other pattern matching games available online from [Sandra Israel-Ovirih](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript) & [Chinmay](//https://code.sololearn.com/W5R8YeqZv5tC/#html) however substantial additional JS/jQuery code and additional HTML/CSS were required to provide the functionality seen in this game version.

### Media
The fortune god .png was taken from a collection of free to use clipart for designers at [PNGGuru](https://www.pngguru.com/).

### Acknowledgements

 - The inspiration for the game format came from that of [Chinmay](//https://code.sololearn.com/W5R8YeqZv5tC/#html), but that to expand the game and to use Chinese pictograms comes from my own needs as a language student and teacher.
 - .
 - .
 - The.
 - The at
   []()
 - I am very grateful to my mentor Ignatious []() for his guidance and commitment in helping me to achieve something realistic but satisfying within the very short time available.

## Future Versions




## On Reflection



**This is for educational use.**

> Written with [StackEdit](https://stackedit.io/).
