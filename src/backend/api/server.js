import express from 'express';

import { getTwitchToken } from "./auth/igdb.js";
import { getGames } from "./auth/igdb.js";
import { getAuth } from "./auth/spotify.js";
import { getAudioFeatures_Track } from "./auth/spotify.js";

let server = express();
const PORT = process.env.PORT || 8000;
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.get("/api/hello", (req, res) => {
    res.status(200).send("Message from the server");
  });
  server.listen(PORT, () => console.log(`listening on port ${PORT}`));

//getTwitchToken();
// getAuth();
console.log("track data \n");
getAudioFeatures_Track('1atjqOZTCdrjxjMyCPZc2g?si=oElxFD9iRASzJa8n_CkxCw&nd=1');


// getGames();







