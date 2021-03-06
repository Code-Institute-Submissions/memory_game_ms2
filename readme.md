
# Pictomatch - Chinese Pictogram Memory Game
Milestone Two Project: Interactive Frontend Development - Code Institute - Robert Jackson

This is a responsive mobile-first pattern matching game to assist beginner students of Chinese to become familiar with Chinese pictogram characters.


## Wireframes

The project wireframes were produced using [figma](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Chinese%20character%20memory%20game%20wireframe%20mobile%20phone.png) and are provided here:
Galaxy s9 Deck            |  MacBook Deck      
:------------------------------:|:-----------------------------------------------------:
![Pictomatch mobile wireframe screen"](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Chinese%20character%20memory%20game%20wireframe%20mobile%20phone.png)  | ![Macbook](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Chinese%20character%20memory%20game%20macbook.png)


## Design choices

This game is primarily designed for mobile use and was designed with a mobile first approach - beginning with design for a small device then adding responsiveness for other device sizes.
An initial concept was to use a [neumorphic](https://uxplanet.org/top-3-visual-design-anti-trends-9e73fb9e2da9) 'anti-design' look (reflected in the wireframes provided) but I realised during development that this provided an insufficient range of options for elements with multiple states such as the game cards. I then chose a vibrant colour palette to reflect the fun nature of the game. I determined to keep the game panel as simple and uncluttered as possible and have maintained this by use of simple matched buttons and readily recognized icons with a minimal move-counter display sharing a common colour theme.

![Palette](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Chinese%20memory%20game%20palette%20bar.png)


A decision was made early on to provide a game title as a header only on larger devices so as not to lose screen area on mobile devices. The initial concept envisaged a single screen game with a modal launched on completion but discussion with mentor Ignatius Ukwuoma led to the realisation that an introductory start screen was also necessary.

Galaxy S9 Deck            |  MacBook Air Game in Play     
:------------------------------:|:------------------------------------------------:
![Pictomatch mobile wireframe screen](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Galaxy_s9.png)  | ![Macbook Air Game ](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/game%20macbook_air.png)

## UX
Game users want a fun way to learn to recognise Chinese pictogram characters.  As game is intended to be fun this is reflected by use of a vibrant colour theme and an element of humour in the modal image.
* The user lands on a screen explaining  the game's purpose, displaying instructions on game play and how to navigate the game.
The user then clicks the single button located at bottom right marked with a recognised forward symbol (right chevron) to progress to the game deck.
* This game presents as 20 blank cards behind which are ten pairs of randomly arranged Chinese pictograms (a number that represent a suitable subset of characters to learn to distinguish at one time - pictograms were chosen from a Google font library that represents approx 250 of the most commonly used modern Chinese characters).
* The game screen presents a 5*4  grid of empty cards providing a satisfying visual experience on  a mobile phone screen as (this is expected to be the main route of access/play - a responsive option to use alternative grids on larger devices such as desktops will be provided).  
* When a first card is clicked the card flips to reveal a pictogram (the font chosen [Noto Sans SC](https://fonts.google.com/specimen/Noto+Sans+SC?subset=chinese-simplified) is one that is easy to recognise - similar to that used on Chinese metro signage). This card stays face up until the next action occurs.
* When the user clicks on the next card it also flips to face up, if they make a pair the cards remain open as matched (a change in background colour reflects this), if not matched both cards flip back to hide their pictograms. The move counter at the page foot increments.
* Game play continues in the same manner until all cards are matched, at this point a modal screen displays presenting a congratulations message and displaying a smiling image of the Chinese God of Fortune. The modal also displays the moves count for the game. The modal can be closed by clicking a button at top right.
* A single display of moves made (rather than time taken) at the game foot and on the modal provides both the visually simplest and most representative marker of game performance.
* At any time in play the card deck and counter can be reset by clicking a right-hand 'refresh' button (using a commonly recognised 'redo' icon) or the user can return to the instruction screen by use of the left-hand 'restart' button (up arrow icon).
* All game buttons show colour change responses on hover or click. Buttons are coloured to coordinate with the game theme. Buttons and the move panel change size responsively with device.

OnePlus7 start screen      |       OnePlus7 play       |      OnePlus7 modal
:-------------------------:|:-------------------------:|:-------------------------:
![OnePlus7 start screen ](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/oneplus7-firefox-start_screen_590.jpg)  |  ![OnePlus7 play](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/OnePlus7%20Firefox%20deck_matched_unmatched_new.jpg)  | ![OnePlus7 modal](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/OnePlus7%20Firefox%20modal.jpg)

## Technologies

1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
      HTML5 is a software solution stack that defines the properties and behaviours of web page content
2. [CSS3](http://www.css3.info/)
      Cascading Style Sheets (CSS) is a style sheet language used for describing the look and formatting of a document written in a markup
3. [Bootstrap (4.3.1)](https://getbootstrap.com/docs/4.3/getting-started/download/)
      Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development - provides new functions and can be accessed via CDN rather than using a library
4. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/About_JavaScript)
      JavaScript is a light-weight, interpreted, object-oriented programming language used primarily for making interactive elements on web pages and applications. It was initially only used for browsers and web pages, but it has spread to many other environments and applications. See also [Pluralsight](https://www.pluralsight.com/courses/quick-start-javascript-1-1870?aid=7010a000002BZNLAA4).
5. [JQuery (3.5.1)](https://blog.jquery.com/2020/05/04/jquery-3-5-1-released-fixing-a-regression/)
      [jQuery](https://jquery.com/) is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript. It provides easy solutions to manipulate the DOM.
  6. [FontAwesome](https://fontawesome.com/)
      Provides an extensive library of free to use icons giving additional visual cues and enhancing UX.

      iPhone5 start screen             |  iPhone5 play      |      iPhone5 modal
      :-------------------------:|:-------------------------:|:-------------------------:
      ![](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPhone5%20start_screen.png)  |  ![](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPhone5%20deck_matched_unmatched_2.png)  | ![](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPhone5%20modal.png)

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
* A restart button should allow the player to reset the game board.
* A start screen should introduce the game purpose and instructions for play
* Buttons should allow navigation between screens
* A congratulations modal should appear when the player matches all cards. The modal can be closed.

### Present:
All of the above features are present in this game.


+ [iPadPro  simulated start_screen, landscape](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_start.png)

<img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_start.png" alt="iPadPro start_screen landscape" style="max-width:60%;">

## Testing

### Mentor recommendations

At the project inception meeting questions posed by my mentor, Ignatius Ukwuoma, made me realize that a complete set of game play instructions should to be added to the start_screen - these were added.

At the mid-project mentor meeting a number of problems were identified and I'm grateful to Ignatius for his assistance and experience in identifying them. These included

- bootstrap source errors - fixed by using script as source for bootstrap.js
- script tag outside HTML body - script tag moved to bottom of body
- missing html closing tag - tag replaced
- poor placement of script 'src' in header instead of bottom of HTML body - script link updated and moved
- possible confusion between restart and back-navigation button due to icon used (chevron-left) -  icon replaced by up-arrow
- poor visual experience when viewing game on a large desktop monitor - set up media queries to make better use of large and extra large screen sizes and to make full use of landscape display.

At the final mentor meeting the following were suggested

- improvements to my Jasmine test protocol
- introducing a fa Fab-icon to overcome an fab console error
- various minor edits to improve code presentation and clarity

+ [iPadPro simulated game, landscape](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_lndscp.png)
<img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_lndscp.png" alt="iPadPro game deck" style="max-width:30%;">


### Test protocols

#### Jasmine test:
  The Fisher-Yates (aka Knuth) Shuffle function was tested using Jasmine to ensure that an array of expected length was returned as well as additional tests to confirm;
  - that an expected character was returned
  - that an inappropriate character was not returned
  - using a spy to ensure the shuffle function was called

  All these tests were passed.

  I am grateful to my mentor for suggesting I do this test to refresh my knowledge of Jasmine. It also refreshed my knowledge that, having used jQuery in my code, a link to jQuery was necessary in the test HTML file.

  + [iPadPro simulated game with modal, landscape](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_congrats.png)
  <img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_congrats.png" alt="iPadPro with modal" style="max-width:30%;">

#### User test  
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

For testing purposes a shortened game form in which the congratulations modal launches on matching a pair of cards was used to speed the test process. To avoid any potential confusion for users these files have now been removed.

OnePlus5 Ecosia Deck            |  iPadMini Safari Deck     
:-----------------:|:-----------------------------------------------------:
![OnePlus5 Ecosia Deck"](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/OnePlus5%20Ecosia_matched_unmatched.jpg)  | ![iPadMini Safari Deck ](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/ipadmini2%20deck_matched_unmatched.jpg)
<img src="" alt="" style="max-width:30%;">


### Test Findings

This site was tested across multiple browsers (Chrome, Safari, Microsoft Edge, FireFox, Ecosia) and on multiple mobile devices (iPhone 5, OnePlus5 and OnePlus7  iPadMini and iPad-pro, Chrome/Firefox/Safari; MacBook Air, Asus and Jumper laptops; Chrome/Safari/Firefox) to ensure compatibility and responsiveness. A range of other devices including  pixel2+pixel2XL, Galaxy S9, Nexus 4, iPhoneX and various desktop display sizes were simulated using [Responsive DesignChecker.](https://responsivedesignchecker.com) and [The Responsinator](https://www.responsinator.com/).
As a result of these tests:
 - I found game 'restart'&'refresh' buttons and the close_modal_btn were incorrectly positioned in Chrome, it was solved using fix at https://stackoverflow.com/questions/30540750/displayflex-not-working-in-chrome
```
.class {
    display: inline-flex;
    width: 100%;
}
```
- From these tests I found further styling was necessary for the start button to make it consistent with the deck buttons on larger devices.

- The game performs well on even the smallest mobile devices tested, though on the iPhone5 it is necessary to scroll on the start_screen to access the start-btn, it is attractive and easy to use on phones with larger displays.

- Further iterative testing using these sites revealed other styling issues resolved by small edits or introduction of media queries to produce a better UX through responsive design especially to produce a more satisfying landscape display on larger devices.

- On one larger device (Asus R541U laptop) the Chinese characters used in the game do not display as attractively in Chrome as they do on Firefox - this is not seen on other devices - one possibility raised in discussion with my mentor was that this could reflect an old version of Chrome on that machine.



- A console error was noted relating to font-awesome fab icons, this class of organisation related icons were not used in the code but in discussion my mentor suggested that their absence could be causing the error. I therefore have included one suitable icon as an icon to accompany the game title - this does add an attractive look to the title but is a pragmatic approach that could raise rights issues for a commercial game/site. Inclusion of this icon appears to have resolved the error.


+ [Title including fa fab-icon resolves console error, Asus laptop, Firefox](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Asus_laptop_firefox_console.png)
![Title including fa fab-icon resolves console error, Asus laptop, Firefox](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Asus_laptop_firefox_console.png)

### Peer Review

As yet I have no peer review feedback.


+ [24in Display Simulated](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/simulated%2024in%20display.png)
![24in Display Simulated](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/simulated%2024in%20display.png)

### Outstanding issues:

 The size of the modal appears to be limited by CSS media rules this means that on some very large devices the modal is relatively small giving a less satisfying appearance - I am still looking for a workaround to increase the size on the largest displays, however this is not a problem that will affect most anticipated (mobile device) users.

+ [24in Display Simulated with Modal](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/24in%20display%20simulated%20with%20modal.png)
![24in Display Simulated with Modal](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/24in%20display%20simulated%20with%20modal.png)

## Validation
  - use of CSS3 in styles.css was validated using [Jigsaw](https://jigsaw.w3.org/css-validator/validator) which identified two minor extraneous punctuation marks, these were removed. Retesting gave a clear result.

## Deployment
This site is hosted using [GitHub pages https://singeroi.github.io/memory_game_ms2/](https://singeroi.github.io/memory_game_ms2/), deployed directly from the master branch.
Deployment followed the steps outlined by [Github configuring a publishing source](https://docs.github.com/en/github/working-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- To configure the publishing source, I confirmed the branch and files to use as publishing source existed in the repository

    - On GitHub, I navigated to the site's repository [Chinese memory game](https://github.com/SingeRoi/memory_game_ms2)

    - Under this repository name, I clicked  

        Settings
        Repository settings button

    - Under "GitHub Pages", I used the None or Branch drop-down menu to select the publishing source

        Using the drop-down menu I selected the Main branch as the publishing source

The deployed site updates automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page is named `index.html`.

To run/edit this code locally, you can clone this repository directly by following the instructions given at [Github cloning a repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository). I use Github Desktop so would follow the instrucions provided to

- Clone a repository to GitHub Desktop

    - On GitHub, navigate to the main page of the repository.

    - Above the list of files, click

        Code.

        Click 'Open with GitHub Desktop' to clone and open the repository with GitHub Desktop.

        Follow the prompts in GitHub Desktop to complete the clone.

    - further information is available at [GitHub clone using GitHub Desktop](https://docs.github.com/en/desktop/guides/contributing-to-projects/cloning-a-repository-from-github-to-github-desktop)

Alternatively you can clone a repository using the [command line](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-using-the-command-line)

    - On GitHub, navigate to the main page of the repository.

    - Above the list of files, click

        Code

        To clone the repository using HTTPS, under "Clone with HTTPS", click the clipboard icon
        To clone the repository using an SSH key click "Use SSH", then click the clipboard icon

        Open Git Bash

        Change the current working directory to the location where you want the cloned directory to be placed.

        Type git clone, and then paste the URL you copied earlier.
        `$ git clone [https://github.com/SingeRoi/memory_game_ms2](https://github.com/SingeRoi/memory_game_ms2)`

        ie ''$ git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY'

        Press Enter to create your local clone.

      See [Github](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-using-the-command-line) for more information and support.

To cut ties with this GitHub repository, type `git remote rm origin` into the terminal.


## Credits

### Content
All styling and content in the start_screen, deck and modal sections of the game were designed and written by me. A model game structure and specific components such as the 'shuffle' function were taken/adapted from other pattern matching games available online from [Sandra Israel-Ovirih](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript) & [Chinmay](//https://code.sololearn.com/W5R8YeqZv5tC/#html) however as well as rewriting and writing substantial additional JS/jQuery code and additional CSS I also significantly altered the HTML index file to provide the functionality seen in this game version.

#### Additional resources consulted

* [how to specify html content in stylesheets](https://developer.mozilla.org/en-US/docs/Learn/CSS/Howto/Generated_content) - (nb content is outside the DOM)
* [how to work with box shadows](https://css-tricks.com/neumorphism-and-css/)
* [manipulating DOM elements](https://www.peachpit.com/articles/article.aspx?p=2010420)
* [alignment with flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
* [refresh function](https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click/50324264#50324264)
* [using spy in Jasmine without an object](https://stackoverflow.com/questions/9510148/using-jasmine-to-spy-on-a-function-without-an-object)
* [sample readme](https://github.com/AJGreaves/familyhub/blob/master/README.md#heroku-deployment)
* [inserting images into readme (French)](https://www.it-swarm.dev/fr/github/comment-peut-afficher-des-images-cote-cote-dans-un-fichier-github-readme.md/1046926365/)

+ [MacBook](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/MacBook%20modal.png)

<img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/MacBook%20modal.png" style="max-width:60%;">

### Media
The fortune god .png image was taken from a collection of free to use clipart for designers at [PNGGuru](https://www.pngguru.com/).

### Acknowledgements

 - The inspiration for the game format came from that of [Chinmay](//https://code.sololearn.com/W5R8YeqZv5tC/#html), choice to expand the game to use a larger grid and to use Chinese pictograms comes from my own needs as a language student and teacher.

 - Color choices were inspired by a website design [Lightning Blue Purple – Simple Web Color Palette](https://hookagency.com/website-color-schemes/) but modified by reference to complementary colours in images found [at](https://encycolorpedia.com/baaf9d) identified using an [eyedropper tool](https://imagecolorpicker.com/en/).

 - I am very grateful to my mentor [Ignatius Ukwuoma](ignatiusukwuoma@gmail.com) for his guidance and commitment in helping me to achieve something realistic but satisfying within severe constraints on time.

## Future Versions

To provide a more challenging and valuable learning resource I would propose the following future developments:
* Addition of functionality to select 10 pictograms from an array of 250 common Chinese characters either as consecutive groups or as a random selection depending on the option chosen by the user.  v1.0
* Addition of audio files to pronounce name of each pictogram when cards are matched. v2.0


## On Reflection

The inclusion of HTML script directly in JavaScript gave a satisfying result in this project, however the resulting HTML insertions proved hard to format and to work with (several attempts to introduce line breaks failed and broke the code), for larger HTML inclusions it might be preferable to write separate HTML files and link to load them appropriately.

### Disclaimer
**This is for educational use.**
