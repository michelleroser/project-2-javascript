# Matching Memory Game

This website is a Javascript built memory game. The game is designed to help the user improve their short term memory skills by seeing how fast they are able to match all 6 of the game cards.


## User Experience (UX)

### User stories

* First Time Visitor Goals
  * As a First Time Visitor, I want to easily understand the main purpose of the site.
  * As a First Time Visitor, I want to be able to easily play the game and use the sites interactive functionality intuitively.
  * As a First Time Visitor, I want to have a fun time playing the game.

* Returning Visitor Goals
  * As a Returning Visitor, I want to see if my memory has improved.
  * As a Returning Visitor, I want to have fun playing the game.

* Frequent User Goals
  * As a Frequent User, I want beat my score.
  * As a Frequent User, I want to be able to play the game easily with fast loading.


### Design

* Colour Scheme
  * The two main colours used are dark orange and black.

* Typography
  * The Baloo 2 font is the main font used throughout the whole website with Sans Serif as the fallback font in case for any reason the font isn't being imported into the site correctly. Baloo 2 is a fun font that is clear and easy to read.

* Imagery
  * Imagery is important. The background image is designed to be bold and catch the user's attention. It also has a smart and serious feeling.
  * The tile images are in keeping with the colour theme for a good UX.

### Wireframes

[Homepage Desktop](assets/images/readme-images/desktop-wireframe.png)

[Homepage Tablet](assets/images/readme-images/tablet-wireframe.png)

[Homepage Mobile](assets/images/readme-images/mobile-wireframe.png)


## Features

### Existing Features

* Navigation Bar
  * I have included a responsive navigation bar, although the website is currently only one page, as more pages are to be included for the long term goals of this website.
  * This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button.

![Image of navigation bar](assets/images/readMe-images/NavBar.png)


* The Welcome Message
  * The welcome message is bold and obvious to clearly explain to the user how to play the game.
  * This section is important for the user to get the full benefit of the additional game functions, i.e the timer.

![Image of welcome message](assets/images/readMe-images/Welcomemessage.png)

* The Scorecard
  * The services section will show the users running score whilst playing the game.
  * This will allow the user to see how close they are to completely the matching game.

![Image of scorecard](assets/images/readMe-images/Scorecard.png)

* The Matching Game
  * This is the flip card game. The user will need to click on the tiles and find the two photos that match. There are 6 pairs in total to complete the game.
  * When the user finds a match, a sound will play and an alert will fire to inform them. The same will occur for every time a match isn't successful.

![Image of game](assets/images/readMe-images/Game.png)

* The Timer
  * This section clearly displays an interactive countdown timer that counts down from 1 minute when the user clicks the start timer button.
  * When the timer is running the button will show the option to pause the timer by clicking again.

![Image of timer](assets/images/readMe-images/Timer.png)

* The Footer
  * The footer section includes links to the relevant social media sites for the Memory Game creators. The links will open to a new tab to allow easy navigation for the user.
  * The footer is valuable to the user as it encourages them to keep connected via social media and allows the user to see if more games have been added.

![Image of the footer](assets/images/readMe-images/Footer.png)


### Features Left to Implement

* About Us page
  * A further feature to add would be a page describing why the website was built.

* I would implement a game tally with the current scorecard, so that the user can see how many games they have won in a row.

## Technologies Used

### Languages Used

* HTML5
* CSS3
* Javascript
* jQuery

## Frameworks, Libraries & Programs Used

* Bootstrap 5:
  * Bootstrap was used to assist with the responsiveness and styling of the website.
* Google Fonts:
  * Google fonts were used to import the "Baloo 2" font via link on the index.html page.
* jQuery:
  * jQuery was used to pause and change the text inside the button upon click.
* Git
  * Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
* GitHub:
  * GitHub is used to store the projects code after being pushed from Git.
* Balsamiq:
  * Balsamiq was used to create the wireframes during the design process.
* Sweetalert2
  * Sweet alert was used to customize my java alert messages.

## Validator Testing

The W3C Markup Validator and W3C CSS Validator Services were used to validate every page of the project to ensure there were no syntax errors in the project.

* W3C Markup Validator - [Results](assets//images/readMe-images/html-validator.png)
* W3C CSS Validator - [Results](assets//images/readMe-images/css-validator.png))
* Java Syntax Test - [Results](assets//images/readMe-images/java-syntax-test.png))


## Testing User Stories from User Experience (UX) Section

* First Time Visitor Goals
  * As a First Time Visitor, I want to easily understand the main purpose of the site.
    * Upon entering the site the user is immediately given the information they need to play the game.

  * As a First Time Visitor, I want to be able to easily play the game and use the sites interactive functionality intuitively.
    * The site has been designed so that it is very easy to use. The functionality of the game board is intuitive and the alert messages help the user along the way when playing the game.

  * As a First Time Visitor, I want to have a fun time playing the game.
    * The game is fun as it is interactive. The comical gif at the completion of the game is amusing and the UX is pleasing.


* Returning Visitor Goals
  * As a Returning Visitor, I want to see if my memory has improved.
    * The time will enable the user to test their memory each time they play.

  * As a Returning Visitor, I want to have fun playing the game.
    * The game is more fun the more you play and test your improvement.


* Frequent User Goals
  * As a Frequent User, I want beat my score.
    * The user would again be able to use the timer to try and beat their own high score.
  * As a Frequent User, I want to be able to play the game easily with fast loading.
    * The game is fast loading and very easy to play and interact with.         


## Further Testing

* The Website was tested on Google Chrome, Internet Explorer, Firefox and Safari browsers.
* The website was viewed on a variety of devices such as Desktop, Laptop, iPhone 11 & iPhone 11pro.
* A large amount of testing was done to ensure that all pages were linking correctly.

## Known Bugs

* The tiles when matched are still able to be clicked and revealed again. The tiles need to be made unable to interact with when matched.

## Deployment

### The project was deployed to GitHub Pages using the following steps...

    1.Log in to GitHub and locate the GitHub Repository
    2.At the top of the Repository (not top of page), locate the "Settings" Button on the menu.
    3.Scroll down the Settings page until you locate the "GitHub Pages" Section.
    4.Under "Source", click the dropdown called "None" and select "Master Branch".
    5.The page will automatically refresh.
    6.Scroll back down through the page to locate the now published site link in the "GitHub Pages" section.

### Forking the GitHub Repository

By forking the GitHub Repository we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original repository by using the following steps...

    1.Log in to GitHub and locate the GitHub Repository
    2.At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
    3.You should now have a copy of the original repository in your GitHub account.

### Making a Local Clone

    1.Log in to GitHub and locate the GitHub Repository
    2.Under the repository name, click "Clone or download".
    3.To clone the repository using HTTPS, under "Clone with HTTPS", copy the link.
    4.Open Git Bash
    5.Change the current working directory to the location where you want the cloned directory to be made.
    6.Type git clone, and then paste the URL you copied in Step 3.
    7.Press Enter. Your local clone will be created.


## Credits

### Code

* The initial main three functions of the grid game were provided in a tutorial. https://www.youtube.com/channel/UC5DNytAJ6_FISueUfzZCVsw

* Bootstrap5: Bootstrap Library used throughout the project mainly to make site responsive using the Bootstrap Grid System.


### Content

* All content was written by the developer.


### Media

* Images
  * Tile - https://www.xmple.com/wallpaper/hexagon-grey-orange-honeycomb-beehive-2732x2048-c2-696969-ff7f50-l2-25-314-a-30-f-5-image/
  * Blank - https://gallery.yopriceville.com/Free-Clipart-Pictures/Decorative-Elements-PNG/Background_and_Blank_Effect_Transparent_PNG_Clip_Art_Image#.YdQmP1OnyX0
  * Rose - https://gallery.yopriceville.com/Free-Clipart-Pictures/Roses-PNG/Red_Rose_Transparent_PNG_Clip_Art#.YdQn6VOnyX0
  * Cake - https://gallery.yopriceville.com/Free-Clipart-Pictures/Cakes-PNG/Birthday_Cake_Transparent_PNG_Clip_Art_Image#.YdQp_lOnyX0
  * Bunny - https://gallery.yopriceville.com/Free-Clipart-Pictures/Animals-PNG/Painted_Bunny_Clipart-png#.YdQqblOnyX0
  * Tophat - https://gallery.yopriceville.com/Free-Clipart-Pictures/Hats-PNG/Top_Hat_Clipart#.YdQqzVOnyX0
  * Beach chair - https://gallery.yopriceville.com/Free-Clipart-Pictures/Summer-Vacation-PNG/Beach_Umbrella_with_Chair_PNG_Image#.YdQrbVOnyX0
  * Drum - https://gallery.yopriceville.com/Free-Clipart-Pictures/Music-PNG/Drum_Transparent_PNG_Clip_Art_Image#.YdQtFFOnyX0
  * Background-image - https://in.pinterest.com/pin/825777281662217587/

* Gifs
  * https://giphy.com/gifs/excited-screaming-jonah-hill-5GoVLqeAOo6PK
