const TWITCH_CLIENT_ID = "eiepl1hv7sjuniw50bec4o4d8ar8wz";
const TWITCH_SECRET = "3ow84q1jydoxrdks2xti7uvt8y8k5d";
var twitchToken = "placeholder";

import axios from "axios";

export function getTwitchToken () {
    const url = "https://id.twitch.tv/oauth2/token?client_id=" + TWITCH_CLIENT_ID + "&client_secret=" + TWITCH_SECRET + "&grant_type=client_credentials";
    axios.post(url).then((response) => {
        // console.log(response.data);
        twitchToken = response.data.access_token;
        console.log("the token returned from twitch API is" + twitchToken);
        return response.data.access_token;
    }).catch((error) => {
        console.log(error);
    });
}


export function getGames() {
  console.log(twitchToken + " is the token");

    axios.post("https://api.igdb.com/v4/games", {
      headers: {
        Accept: "application/json",
        "Client-ID": TWITCH_CLIENT_ID,
        Authorization: `Bearer ${twitchToken}`,
      },
      data: "fields name; limit 10",
    }).then((response) => {
        console.log(response.data);
    });
}





