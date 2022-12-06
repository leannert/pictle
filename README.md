# Pictle
Pictle is a web application guessing game between an image and its appropriate title. It is inspired by the crossword game Wordle published by the New York Times.

In Pictle, a player's vocabulary and memorization abilities are evaluated. A player can choose from two categories: music album covers and movie posters. A random pixelated image from the selected category will be shown. The player must identify the title and/or name of the image. 

There are three highlight colors when entering English alphabet letters to complete the word or phrase, one for each sort of letter : green denotes that the letter is both present and in the correct place of the word ; yellow denotes that the letter is present but in the wrong place of the word ; and gray denotes that the letter is not present in the word at all. To succeed, a player must uncover the title of the disguised image, in which all letters have a green highlight.

It's easy to understand, but also challenging. It's not quite that straightforward, but a player may use all twenty-six letters of the alphabet to create the title that identifies the image. 

## Gameplay
The goal of the game is for players to correcly guess a variable-letter word or phrase within five attempts given a pixelated image. The guess will be entered in a row of grid-like boxes. The size of the grid row will vary with the appropriate title / name of the image. 

Each letter is assigned a color after each guess: green, yellow, or gray. Green denotes that the letter is correct and in the proper place. Yellow denotes that the letter is in the answer, but not in the proper place. Gray denotes that the letter is not in the answer at all. Multiple occurrences of a letter in a guess, such as "a" in the word "Avatar", will only be highlighted in green or yellow if the same letter also appears more than once in the solution. Otherwise, repeated letters in excess will be highlighted in gray. 

It is important to note that Pictle does not distinguish between lowercase and uppercase letters. In other words, a player's answer is case-insensitive. The game automatically stores the letters that a player enters as their guess.

If a player enters an incorrect guess, the given image will become less pixelated and more clear to view.

A player may also log in to play Pictle (i.e., may connect their account to a 3rd party service such as Google using OAuth). This will also allow the player to keep track of their progress on a leaderboard. 

## How to Play Better
When you are new to the game, you will find it difficult to have any clues telling you where to start. You only have five attempts to win the game. It is recommended to consider the character-length of the row grid (the number of letters in the title of the image). Remember that with each incorrect guess, the pixelated image will become more clear to easily uncover its title or name. Your level of gaming will improve day by day through practice. You can discover and listen to various music genres and artists, as well as watch many films and movies. Not only may you play better, but you will expand your cultural knowledge. Pictle will make it easier for you to identify and memorize titles along with their spellings.

## Team Members
* [Byeong Heon Ahn](https://github.com/harrisonahn1129)
* [Ji Yung Isaac Chan](https://github.com/cha0908)
* [Rebecca Lawrence](https://github.com/rlaw01)
* [Mark Maci](https://github.com/markmaci)
* [Leanne Tong](https://github.com/leannert)

## Development

### Frontend
* [React.js](https://reactjs.org)
* [Material UI](https://mui.com)

### Backend
* [Node.js](https://nodejs.org/en/)
* [Express.js](https://expressjs.com/en/guide/routing.html)
* [Mongoose.js](https://mongoosejs.com)

### Database
* [MongoDB](https://www.mongodb.com)

### External APIs
* [Spotify](https://developer.spotify.com/web-api/)
* [The Movie Database](https://www.themoviedb.org/documentation/api)
* [Google OAuth](https://developers.google.com/identity/protocols/oauth2)
* [Google Passport](http://www.passportjs.org/packages/passport-google-oauth20/)

## Running the Application