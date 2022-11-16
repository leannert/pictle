import axios from 'axios'
import { response } from 'express'

export const getTwitchAuth = async () => {
    try {
        const tokenURL = 'https://id.twitch.tv/oauth2/token'

        const response = await axios.post(tokenURL, {
            client_id: process.env.TWITCH_CLIENT_ID,
            client_secret: process.env.TWITCH_CLIENT_SECRET,
            grant_type: 'client_credentials',
        })

        return response.data.access_token
    } catch (error) {
        console.log(error)
    }
}

export const getGameCover = async (gameID) => {
    const twitchToken = await getTwitchAuth()
    var gameCover = {}

    try {
        const response = await axios({
            url: 'https://api.igdb.com/v4/covers',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Client-ID': process.env.TWITCH_CLIENT_ID,
                Authorization: 'Bearer ' + twitchToken,
                'Cross-Origin-Resource-Policy': 'cross-origin',
            },
            data: `fields animated,game,height,image_id,url,width; where game = ${gameID};`,
        })

        if (response.status == 429) {
            return undefined
        }

        return response.data[0]
    } catch (error) {
        console.log(error.response)
    }
}

export const getPopularGames = async () => {
    const twitchToken = await getTwitchAuth()
    var popularGames = []

    try {
        const response = await axios({
            url: 'https://api.igdb.com/v4/games',
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Client-ID': process.env.TWITCH_CLIENT_ID,
                Authorization: 'Bearer ' + twitchToken,
            },
            data: 'fields id, cover, first_release_date, name, storyline, summary; sort total_rating_count desc; where rating >= 80; limit 100;',
        })
        response.data.forEach((game) => {
            popularGames.push(game)
        })
        return popularGames
    } catch (error) {
        console.log(error.response)
    }
}
