# User Stories

## 1. Playing Pictle for the first time
1. Enter the site via the URL
2. User is greeted with home page with a list of all the categories
3. User can click on a category (i.e. Albums) to enter the game UI
4. User is shown a heavily pixelated image of an album cover, with the guessing interface underneath it.

### Guess UI Key
| Color | Description |
| ----------- | ----------- |
| Grey | This letter is not present in the string at all |
| Yellow | This letter is present in the string but it is not in the right position |
| Green | This letter is present in the string and in the right position |

5. User inputs an incorrect guess for the album name and presses enter (or clicks button?)
5. The image becomes less pixelated, and the guess interface colors in letters based on if they were correct. (See Guess UI Key)
6. The user continues to guess until they guess the correct album name (all letters green).
7. If the user guesses the correct album name, they are shown the album cover in full resolution, and the game ends.
8. If the user fails to guess the correct string after $X$ number of guesses, they are shown the album cover in full resolution, and the game ends.

## 2. Logging in
1. User clicks on the profile icon in the top right corner
2. User is presented with a login screen
3. User inputs their username and password and presses enter (or clicks button?)
4. User is logged in and can now access their profile page


## 3. Creating an account
1. User clicks on the profile icon in the top right corner
2. User is presented with a login screen
3. User clicks on the "Create an account" button
4. User is presented with a create account screen
5. User inputs their username, password, and email and presses enter (or clicks button?)
6. User is logged in and can now access their profile page

## 4. Acessing Leaderboards
1. User clicks on the leaderboards icon in the top right corner
2. User is presented with an overral leaderboard
2. User is presented with a UI that shows the top 10 players in each category, as well as their scores
3. User can click on a category to see the full leaderboard for that category

## 5. Sharing Guesses to Social Media
1. User guesses an album name correctly
2. User is presented with an option (button) to share their guess to twitter, intstagra, etc.
3. User clicks on the button and is presented with a share screen
4. User inputs their message and presses enter (or clicks button?)
5. User is presented with a confirmation screen that their guess was shared
6. The post shared has the image at the resolution they guessed it at, their guess, wordle username (and leaderboard rank/score), and a link to the game


