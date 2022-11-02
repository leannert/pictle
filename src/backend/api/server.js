import {} from 'dotenv/config'
import express from 'express'
import { getTwitchAuth, getTestGameCover } from './auth/igdb.js'
import { getSpotifyAuth, getTestTrack } from './auth/spotify.js'


let server = express()
const PORT = process.env.PORT || 8000
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.listen(PORT, () => console.log(`listening on port ${PORT}`))
server.get('/api/hello', (req, res) => {
    res.status(200).send('Message from the server')
})

// spotify e2e test
const testImage = await getTestGameCover()

// const testImage = await getTestTrack(
//     '1atjqOZTCdrjxjMyCPZc2g?si=oElxFD9iRASzJa8n_CkxCw&nd=1'
// )
// if (testImage != null) {
//     console.log('testImage from spotify.js is ' + { testImage })
// }

server.get('/dev/testimage', (req, res) => {
    res.status(200).send({ testImage })
})


