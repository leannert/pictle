import { getTwitchAuth } from './igdb.js'
import { getSpotifyAuth } from './spotify.js'
import { getTestPoster } from './tmdb.js'

export const authTest = async () => {
    try {
            const testTwitchToken = await getTwitchAuth()
            console.log('twitch API authenticated...');
            const testSpotifyToken = await getSpotifyAuth()
            console.log('spotify API authenticated...');
            const testPoster = await getTestPoster(128)
            console.log('tmdb API authenticated...');

            return null
    } catch (error) {
        console.log(error)
        return console.error('authTest failed')
    }
}
