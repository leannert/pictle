# Pictle
Pictle is a web application guessing game between an image and its appropriate title. It is inspired by the crossword game Wordle published by the New York Times.

In Pictle, a player's vocabulary and memorization abilities are evaluated. A player can choose from two categories: music album covers and movie posters. A random pixelated image from a selected category will be shown. The player must identify the title and/or name of the image. Underneath the displayed image, there is a text-box that users will type in their guesses.

It's easy to understand, but also challenging. It's not quite that straightforward, but a player may use all twenty-six letters of the alphabet, as well as the space character, to create the title associated with the image. 

## Gameplay
The goal of the game is for players to correcly guess a variable-letter word or phrase within five attempts given a pixelated image. The image will appear when a player selects their desired category in the side menubar. There will also be points assigned to the guess attempt, ranging from 0 to 1000 points. The most pixelated image will have the highest points (1000) assigned that a player can obtain if they guess the correct title to the picture. With each incorrect guess that a player makes, the given image will become less pixelated and more clear to view. However, this also means that the points assigned to the image will be less as well. If a player completely fails to enter the correct answer, then the points obtained is 0. When the game round ends, regardless if a player wins or loses in guessing the correct title and/or name of the image, he or she will be able to play again with a new pixelated image from the category via a buttom located above the text-box.

It is important to note that Pictle does not distinguish between lowercase and uppercase letters. In other words, a player's answer is case-insensitive. The game automatically stores the letters that a player enters as their guess.

A player may also log in to play Pictle. They may connect their account to a 3rd party service, specifically Google using OAuth. This will also allow the player to keep track of their progress on a leaderboard. 

## How to Play Better
When you are new to the game, you will find it difficult to have any clues telling you where to start. You only have five attempts to win the game. It is recommended to consider the length of the row grid (the number of letters in the title of the image). Remember that with each incorrect guess, the pixelated image will become more clear to easily uncover its identity. Your level of gaming will improve day by day through practice. You can also discover and listen to various music genres and artists, as well as watch many films and movies, in your free time. Not only may you play better, but you will expand your cultural knowledge. Pictle will make it easier for you to identify and memorize titles along with their spellings.

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

As a prerequisite, install the required node modules and dependencies using npm:

```bash
$ npm install
```

This is to be done in the root directory of both the frontend and backend.


Then, run the application and server using npm:

```bash
$ npm start
```

This is to be done in the root directory of both the frontend and backend.

The application should run on port 3000 in a browser: [http://localhost:3000](http://localhost:3000)
