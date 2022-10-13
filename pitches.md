Preface - Everything in this file is tentative to change

# **Pictle - a Wordle type guessing game with pictures**

## What it is

The overall idea of Pictle is to create a game that is similar to Wordle, but instead of guessing words, you guess pictures by entering words as guesses. Similar to Wordle, pictures will change on a time scale that has yet to be determined (every hour, every day, etc). 

## What playing Pictle will be like

Players must log in to play Pictle (can connect their account to 3rd party services such as Google, Twitter, etc using OAuth). Upon being logged in, a user is able to play a game in a multitude of categories such as movies, album covers, video game box arts, tv scenes, logos, celebrities, or whatever else we can think of. 

Let's say for this example that the hypothetical user chooses video games. They will then be presented with a picture of a videogame box art with a strong pixel blur effect as they are currently on level 5 (highest difficulty guess). Should the user guess the video game correctly, they will be rewarded with the most points as they guessed on the hardest level. If they guess incorrectly, the pixel blur effect on the image will scale down to level 4, which carries a smaller point value for a correct guess. This pattern continues to level 1, where the image is almost completely clear and the user is rewarded with the least amount of points for a correct guess. If the user cannot guess the image correctly, they are given 0 points. 

There will be a leaderboard for each category that will show the top 10 players for that category. There could also be a global leaderboard that shows the top 10 players for all categories.

## What Pictle will be built with

### APIs to pull images from 

**This list is not exhaustive and is subject to change**

- Movies: https://www.themoviedb.org/documentation/api
- Album Covers: https://developer.spotify.com/web-api/
- Video Game Box Arts: https://www.giantbomb.com/api/ *or* https://www.igdb.com/api
- TV Scenes: https://www.themoviedb.org/documentation/api
- Logos: https://www.benzinga.com/apis/where-to-find-the-hottest-company-logos-api/


Unsplash is a stock photo API that could be used for many categories/purposes

https://unsplash.com/

### Front-end architecture

React.js

### Back-end architecture

- Node.js backend functioning as an API for web app to make calls and get data from

- HTTP Requests: Axios or Ky (npmjs.com/package/ky) or Superagent (npmjs.com/package/superagent)

- Database: SQL or PostgreSQL 






