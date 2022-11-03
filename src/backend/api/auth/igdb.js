import axios from 'axios'

export const getTwitchAuth = async () => {
    try {
        const tokenURL = 'https://id.twitch.tv/oauth2/token'

        const response = await axios.post(tokenURL, {
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials'
        })
        
        return response.data.access_token
    } catch (error) {
        console.log(error)
    }
}

export const getTestGameCover = async () => {
    const twitchToken = await getTwitchAuth()

    try {
        const response = await axios({
            url: "https://api.igdb.com/v4/covers",
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Client-ID': process.env.TWITCH_CLIENT_ID,
                'Authorization': 'Bearer ' + twitchToken
            },
            data: "fields alpha_channel,animated,checksum,game,height,image_id,url,width; where game = 7346; limit 1;"
          })
          
        return response.data[0].url.toString()
    }
    catch (error) {
        console.log(error.response)
    }

}
    
