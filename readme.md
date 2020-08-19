
# Pictomatch - Chinese Pictogram Memory Game
Milestone Two Project: Interactive Frontend Development - Code Institute - Robert Jackson

This is a responsive mobile-first pattern matching game to assist beginner students of Chinese to become familiar with Chinese pictogram characters.


## Wireframes

The project wireframes were produced using [figma](https://www.figma.com/) and are provided here:
Mobile Deck            |  MacBook Deck      
:-------------------------:|:-----------------------------------------------------:
![Pictomatch mobile wireframe screen"](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Chinese%20character%20memory%20game%20wireframe%20mobile%20phone.png)  | ![Macbook](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Chinese%20character%20memory%20game%20macbook.png)


## Design choices

This game is primarily designed for mobile use and was designed with a mobile first approach - beginning with design for a small device then adding responsiveness for other device sizes.
An initial concept was to use a [neumorphic](https://uxplanet.org/top-3-visual-design-anti-trends-9e73fb9e2da9) 'anti-design' look (reflected in the wireframes provided) but I realised during development that this provided an insufficient range of options for elements with multiple states such as the game cards. I then chose a vibrant colour palette to reflect the fun nature of the game. I determined to keep the game panel as simple and uncluttered as possible and have maintained this by use of simple matched buttons and readily recognized icons with a minimal move-counter display sharing a common colour theme.

![Palette](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Chinese%20memory%20game%20palette%20bar.png)


A decision was made early on to provide a game title as a header only on larger devices so as not to lose screen area on mobile devices. The initial concept envisaged a single screen game with a modal launched on completion but discussion with mentor Ignatius Ukwuoma led to the realisation that an introductory start screen was also necessary.

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
![OnePlus7 start screen ](https://github.com/SingeRoi/ memory_game_ms2/assets/images/oneplus7-firefox-start_screen_sm.jpg )  |  ![OnePlus7 play](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/OnePlus7%20Firefox%20deck_matched_unmatched.jpg)  | ![OnePlus7 modal](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/OnePlus7%20Firefox%20modal.jpg)

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
* A restart button should allow the player reset the game board.
* A start screen should introduce the game purpose and instructions for play
* Buttons should allow navigation between screens
* A congratulations modal should appear when the player matches all cards. The modal can be closed.

### Present:
All of the above features are present in this game.


+ [iPadPro start_screen landscape](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_start.png)

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
- poor visual experience when viewing game on a large desktop monitor - set up media queries to make better use of large and extra large screen sizes and to make full use of landscape display

+ [OnePlus7 matched cards Firefox](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/OnePlus7%20Firefox%20deck_matched_all.jpg)     compared with   [OnePlus7 matched cards Chrome](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/OnePlus7%20Chrome%20deck_matched_all.jpg)

<img src="C:\Users\Heureuse TouJou\Documents\Coding\ms2\MS2 Chinese memory game\memory_game\assets\images\OnePlus7 Firefox deck_matched_all.jpg" alt="OnePlus7 matched cards Firefox" style="max-width:30% !important;"><img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/OnePlus7%20Chrome%20deck_matched_all.jpg" alt="OnePlus7 matched cards Chrome" style="max-width:30% !important;">

### Test protocols

Jasmine test:
  The Fisher-Yates (aka Knuth) Shuffle function was tested using Jasmine to ensure that an array of expected length was returned as well as additional tests, I am grateful to my mentor for this suggestion. The jasmine test also checked that the returned array contained an appropriate pictogram character, that it did not include an inappropriate character and that the function was called.

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

A shortened game form in which the congratulations modal launches on matching a pair of cards was used to speed up some testing processes. This is included and can be accessed by using [quick_index](https://github.com/SingeRoi/memory_game_ms2/blob/master/quick_index.html) and it's cognate [quick_game](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/scripts/quick_game.js) script.

+ [iPhone5](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPhone5%20deck_matched_unmatched_2.png )

<img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPhone5%20start_screen.png" alt="iPhone5 start_screen" style="max-width:30% important;"><img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPhone5%20deck_matched_unmatched_2.png" style="max-width:30%;"><img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPhone5%20modal.png" alt="iPhone5 modal" style="max-width:30%;">

### Test Findings

This site was tested across multipleplus browsers (Chrome, Safari, Internet Explorer, FireFox) and on multiple mobile devices (iPhone 5, OnePlus5 and OnePlus7  iPadMini and iPad-pro, Chrome/Firefox/Safari; Macbook, Asus and Jumper laptops; Chrome/Safari/Firefox) to ensure compatibility and responsiveness. A range of other devices including  pixel2+pixel2XL, Galaxy S9, Nexus 4, iPhoneX and various desktop display sizes were simulated using [Responsive DesignChecker.](https://responsivedesignchecker.com) and [The Responsinator](https://www.responsinator.com/).
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

- on one larger device (Asus R541U laptop) the Chinese characters used in the game do not display as attractively in Chrome as they do on Firefox - this is not seen on other devices.



### Peer Review

+ [Galaxy S9](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Galaxy_s9.png)     compared with   [iPadPro](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_lndscp.png)

<img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/Galaxy_s9.png" alt="Galaxy S9 deck" style="max-width:30%;"><img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_lndscp.png" alt="iPadPro deck" style="max-width:60%;">

### Outstanding issues:

 - the size of the modal appears to be limited by CSS media rules this means that on some very large devices the modal is too small for a satisfying appearance - I am still looking for a workaround to increase the size on the largest displays, however this is not a problem that will affect most anticipated (mobile device) users.

 + [iPadPro modal landscape](https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_congrats.png)

 <img src="https://github.com/SingeRoi/memory_game_ms2/blob/master/assets/images/iPadPro_congrats.png" alt="Pictomatch colour palette bariPadPro congratulations modal" style="max-width:100%;">


## Deployment
This site is hosted using [GitHub pages](https://singeroi.github.io/memory_game_ms2/), deployed directly from the master branch.
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



**This is for educational use.**
