import axios from 'axios'
import qs from 'qs'

const authToken = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`,
    'utf-8'
).toString('base64')

export const getSpotifyAuth = async () => {
    try {
        const tokenURL = 'https://accounts.spotify.com/api/token'
        const data = qs.stringify({ grant_type: 'client_credentials' })

        const response = await axios.post(tokenURL, data, {
            headers: {
                Authorization: `Basic ${authToken}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
        return response.data.access_token
    } catch (error) {
        console.log(error)
    }
}

export const getTrack = async (trackID) => {
    const spotifyToken = await getSpotifyAuth()
    console.log('spotifyToken: ' + spotifyToken)

    const apiURL = `https://api.spotify.com/v1/albums/${trackID}`
    try {
        const response = await axios.get(apiURL, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${spotifyToken}`,
                Host: 'api.spotify.com',
            },
        })
        const size = Buffer.byteLength(JSON.stringify(response.data))
        console.log('Size of /tracks response: ' + size + ' bytes')
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const getPlaylistTracks = async (playlistID) => {
    const spotifyToken = await getSpotifyAuth()
    var tracks = []

    const apiURL = `https://api.spotify.com/v1/playlists/${playlistID}/tracks`
    try {
        const response = await axios.get(apiURL, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${spotifyToken}`,
                Host: 'api.spotify.com',
            },
        })
        const size = Buffer.byteLength(JSON.stringify(response.data))
        console.log('Size of /playlists response: ' + size + ' bytes')

        response.data.tracks.items.forEach((track) => {
            tracks.push(track.track)
        })

        return tracks
    } catch (error) {
        console.log(error)
    }
}
