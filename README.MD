# Current state of the project
This is a decoupled front end and backend that you can run locally on your computer. The frontend is a react app that has nothing except a message from the server (backend). 
The backend is a node.js server that has a single endpoint that returns a message. It also makes a request to twitch API for authentication to use for IGDB API. That's where I've left off. I need to figure out how to use the twitch authentication to make a request to IGDB API because right now it's not working. But this should serve as a good starting point for us and we can always scrap it and try something else. 

</br>

## How to run the project (not 100% sure if this will work correctly)
1. Clone the repo 
2. Run `npm install` in the root directory (of both front end and back end, this installs the required node modules and dependencies)
3. Run `npm start` in the root directory (of both front end and back end, this starts the react app and server, respectively)
3. Open your browser and go to `localhost:3000` (this is the react app) 


</br>

## How we should develop moving forward (tentative)
This architecture/foundation to the project is committed to a new branch called `dev`. We should all checkout and work on our own branches from `dev` and then merge them into `dev` when we're ready. Make sure to pull from `dev` before you start working on your branch (unless it would raise an error). Then, once we've tested things on `dev` we can merge it into `main`. 

