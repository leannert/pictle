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