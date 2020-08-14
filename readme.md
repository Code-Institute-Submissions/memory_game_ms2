
# Pictomatch - Chinese Pictogram Memory Game
Milestone Two Project: Interactive Frontend Development - Code Institute - Robert Jackson

This is a responsive mobile-first pattern matching game to assist beginner students of Chinese to become familiar with Chinese pictogram characters.


## Wireframes

The project wireframes were produced using figma and are provided
  +  [Mobile]()
  +  [Macbook]()

## UX



## Technologies

1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
      HTML5 is a software solution stack that defines the properties and behaviours of web page content
2. [CSS3](http://www.css3.info/)
      Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup
3. [Bootstrap (4.3.1)](https://getbootstrap.com/docs/4.3/getting-started/download/)
      Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development - provides new functions and can be accessed via CDN rather than using a library
4. [JavaScript](https://getbootstrap.com/docs/4.3/getting-started/download/)

5. [JQuery (4.3.1)](https://getbootstrap.com/docs/4.3/getting-started/download/)



## Features

Features present:

  -  Speech bubble title on the 'Landing page' provides a visual connection to the image used as background working together to indicate the purpose of the Café - consistent responsive appearance uses a media query
  -  Parallax scrolling of sections to provide a contemporary and professional feel whilst allowing simple navigation to all parts of the site. Scrolling is effected by use of the CSS Smooth-scroll attribute
  -  The navbar stays collapsed regardless of the screen size to promote a minimalist design
  -  Learning material video and audio elements can be played directly on the page without browsing away
  -  A pure CSS and HTML5 crossword is provided as part of the learning materials illustrating use of CSS Grid layout
  -  A [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) quiz is presented as a modal allowing completion without navigation away from the page
  -  A simple contact form is provided coupled with a warning modal informing users about the status of data collection and privacy

### Features Left to Implement


## Testing
The

### Test protocols



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
  1.  Check modal is all in frame, overlays deck, focused and contains 'close'btn at top right, 'Congratulations!' and 'you won!' text as well as 'fortune god' image and correct move number
  2.  Hover over 'close' btn' and verify response
  3.  Click on 'close' btn' and verify modal closes returning to game deck.
  

About:

1.  Go to the "About" section
2.  Verify speech bubbles are hidden/visible as appropriate for device
3.  Scroll down and check whether parallax scroll behaviour is present

Learn:

1.  Go to the "Learn" section
2.  Hover over card and verify response
3.  Click on media play/pause, if present, verify content play's pauses successfully
4.  Hover over link icons and verify response.
5.  Click icon and verify appropriate response
6.  Scroll down and check whether parallax scroll behaviour is present or not

Learn cards:

  1.  Go to the "Learn" section
  2.  Hover over card and verify response
  3.  Click on media play/pause, if present, verify content play's pauses successfully
  4.  Hover over link icons and verify response.
  5.  Click icon and verify appropriate response

  Quiz modal:

    1.  Go to the "Learn" section
    2.  Click quiz '?' icon and verify modal opens - check all sections present
    3.  Click answer verify response occurs
    4.  Click check-answer button verify response occurs
    5.  Click next question verify response occurs
    6.  Continue until end of quiz click to verify result
    7.  Click close button verify that quiz modal closes
    8.  Reopen quiz modal
    9.  Click close 'x' verify that quiz modal closes

  Crossword:

    1.  Go to the "Learn" section
    2.  Click on 'pencil' icon and verify crossword opens in new window - check grid and clues present
    3.  Click on letter square and verify change to yellow
    4.  Enter letter verify appropriate response occurs
    5.  Enter complete word check that colour changes for whole word
    6.  Click 'check for validity' verify correct colour change occurs
    7.  Complete crossword verify response

Support cards:

  1.  Go to the "Support" section
  2.  Hover over card and verify response
  3.  Click on media play/pause, if present, verify content play's pauses successfully
  4.  Hover over link icons and verify response.
  5.  Click icon and verify appropriate response

Contact form:

  1.  Go to the "Contact Us" section
  2.  Try to submit the empty form and verify that an error message about the required fields appears
  3.  Try to submit the form with an invalid email address and verify that a relevant error message appears
  4.  Try to submit the form with all inputs valid and verify that a success message appears
  5.  Press send and verify that contact form modal opens
  6.  Check that pressing close button closes modal

Footer buttons

  1.  Scroll to "Footer"
  2.  hover over icon check it responds by changing colours
  3.  click on icon and verify that it opens appropriate link

### Test Findings
The landing page has a similar look and simple feel whatever screen size is used, incorporating the long word 'Conversation' comfortably is achieved by use of alternative speech bubbles with different heading sizes determined by a media query.

By clicking on the navbar the links allow navigation to other Language indexes or page sections regardless of the order they are listed or being used.

Media are embedded in the site and can be played directly by pressing a play button (Soundcloud) or by right clicking on the video. This minimises the need to open other windows on a mobile device and means that learners can receive the full experience without navigating away. It is also possible to open each media in a new tab by clicking on the desktop icon. The quiz for the 'Half a million secrets' is executed as a modal and can be completed without leaving the Café site. Song lyrics are provided as links to pdf files and will download to your default folder for downloads on click using the 'download' attribute. The crossword is executed from a separate index and stylesheet to allow inclusion of new material it opens in a new tab when clicked. All links have been manually tested to ensure that they are pointing to the correct destination.

This site was tested across multiple browsers (Chrome, Safari, Internet Explorer, FireFox) and on multiple mobile devices (iPhones 5,6-8,X;  iPad and iPad-pro, Chrome and Safari; pixel2+pixel2XL, Galaxy S9, One+5, Macbook, Asus and Jumper laptops; Chrome/Safari/Firefox) to ensure compatibility and responsiveness. A range of other devices were simulated using [Responsive DesignChecker.](https://responsivedesignchecker.com) and [The Responsinator](https://www.responsinator.com/)
As a result of these tests:
 - I found there was no video play option using Chrome this was fixed by specifically introducing 'control'  and  then restyling the video position by adjusting padding.

 - I found that Learn/Support cards sat to the right on iPhone6/7/8/X on both Chrome &/Firefox simulations
 - I also found that cards were slightly to right on pixel2XL in Chrome simulations.
 - To correct these issues I removed an 80%container width media query previously applying.
 - Further adjustments to styling were made to adjust positioning on small devices

 - I also improved card alignment on iphone XL with a solution from [here]
 (https://stackoverflow.com/questions/6072154/html-css-wrapper-is-not-center-aligned-in-iphone-safari)

Further iterative testing using these sites revealed other styling issues resolved by small edits or introduction of media queries to produce a better UX through responsive design;

### Peer Review



### Outstanding issues:
 - the Chinese characters used in the game do not display as authentically on Chrome as they do on Firefox - this needs to be addressed as it can affect the ease of their recognition.


## Deployment
This site is hosted using GitHub pages, deployed directly from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named `index.html`.

To run locally, you can clone this repository directly into the editor of your choice by pasting `git clone [https://singeroi.github.io/memory_game_ms2/](https://singeroi.github.io/memory_game_ms2/)` into your terminal. To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
All styling and content in the start_screen, deck and modal sections of the game were designed and written by me. The overall structure of the game and specific components such as the 'shuffle' function were copied from other pattern matching games available online at .

### Media
The fortune god .png was taken from a collection of free to use graphics at

### Acknowledgements

 - The inspiration .
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
