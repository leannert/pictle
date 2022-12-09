# Pictle

## What It Is
The overall idea of Pictle is to create a game that is similar to Wordle, but instead of guessing a five-letter word, you guess the title or name of a pixelated image by entering English words as guesses. The picture will change when the player correctly solves the current puzzle.

## Using Pictle
Players must log in to play Pictle (can connect their account to 3rd party services such as Google, Twitter, etc. using OAuth). When logged in, a user is able to play a game, selecting a category such as movies, album covers, video games, logos, celebrities, or whatever category is included and implemented into the application. 

Suppose the following hypothetical situation: a user chooses the video games category. The user will then be presented with a picture of a video game cover art with a strong pixel blur effect. The user will have a limited number of attempts to guess the title of the video game correctly. If the user guesses incorrectly, the pixel blur effect on the image will scale down, i.e. become more clearer. This pattern continues until the image is almost completely clear and/or the user correctly the guesses the word. If the user cannot guess the image correctly within the set number of attempts, then the user will lose the game.

There will be a leaderboard for each category that will show the top players for that category. There may also be a global leaderboard that shows the top players for all categories.

## What Pictle Will Be Built With
### APIs for Images
- Movies: https://www.themoviedb.org/documentation/api
- Album Covers: https://developer.spotify.com/web-api/
- Video Game Box Arts: https://www.giantbomb.com/api/ *or* https://www.igdb.com/api
- TV Scenes: https://www.themoviedb.org/documentation/api
- Logos: https://www.benzinga.com/apis/where-to-find-the-hottest-company-logos-api/

### Front-End Architecture
- React.js

### Back-End Architecture
- Node.js backend functioning as an API for web application to make calls and retrieve data from
- HTTP Requests: Axios or [Ky](npmjs.com/package/ky) or [Superagent](npmjs.com/package/superagent)
- Database: SQL or PostgreSQL

## Possible Features

- Keyboard and Letter Interface: for guessing words similar to wordle (yellow if the letter is *in* the word, gray if it is not in the word, and green if it is in the right spot).

- Ability to Share Guess Progress: on social media platforms like Twitter and Instagram, similar to how you can share Wordle guesses. It may include a screenshot of the image and the guesses interface.

- Blitz Mode: in which each guess has to be made within a very short time limit, which could also help making a 1 vs. 1 mode possible.

- Hints: uses metadata from the API to give hints to the user (e.g., "This video game was released in 2017," "This album was released in 2016," "Stanley Kubrick directed this film," etc.)

