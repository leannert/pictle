# Tech Stack

## Frontend (React)

We chose react because it is a popular framework that is easy to learn and has a large community. It is also a framework that is used by many companies and is a good choice for a project like this, given that the UI has to be responsive and dynamic. Material UI is a library that we will use to make certain UI components such as menu bars, buttons, etc.



## Backend (Node.js + Express)

Using a Node.js runtime backend allows us to use JavaScript on both the frontend and backend, making code sharing and understainding easier across the board and when switching from frontend to backend work and vice versa. Implementations of certain things we want in the project are very similar semantically across back and front end (async await, routing, etc). We also chose Express because it is a popular routing framework for Node.js and is easy to learn. The backend serves as an express API that has routes for the various data types (User, Track, Game, Logo) that will be called by the frontend, each with CRUD operations.

The backend retrieves data from various third party APIs like IGDB, TMDB, Dicebear, Spotify to get images and metadata after authentication. This data is then stored in the db.

## Database (MongoDB)

We chose MongoDB because it is a good NoSQL database that is easy to set up and use. Our data from third party APIs are already in JSON format, so making Mongo Schemas to fit this data is easier than with a relational database. Our data is not very relational, so we don't need to worry about joins, foreign keys and other relational database features. MongoDB also has a large community and can be hosted on the cloud for free with MongoDB Atlas. We will use Mongoose in node as an ODM to interact with the database.