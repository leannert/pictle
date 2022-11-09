import {} from 'dotenv/config'
import express from 'express'
import { connectToMongoDB } from './db/conn.js'
import { getTwitchAuth, getTestGameCover } from './api/igdb.js'
import { getSpotifyAuth, getTrack, getPlaylistTracks } from './api/spotify.js'
import { getTestPoster } from './api/tmdb.js'
import { authTest } from './api/authtest.js'
import { users } from './db/init.js'
import { User } from './db/models/User.js'
import { Track } from './db/models/Track.js'
import { usersRouter } from './routes/users.js'
import { tracksRouter } from './routes/tracks.js'
import mongoose from 'mongoose'

let server = express()
const PORT = process.env.PORT || 8000
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.listen(PORT, () => console.log(`listening on port ${PORT}`))
server.get('/api/hello', (req, res) => {
    res.status(200).send('Message from the server')
})

// connect to MongoDB
let db = await connectToMongoDB()
// create users collection
// let usersCollection = users()

// create tracks collection

server.use('/users', usersRouter)
server.use('/tracks', tracksRouter)

// api authentication test
const authenticationStatus = await authTest()

// const testTrack = await getTrack('4aawyAB9vmqN3uQ7FjRGTy')

// var sampleTrack = new Track({
//     ObjectId: mongoose.Types.ObjectId(),
//     spotify: testTrack,
// })
// sampleTrack.save(function (err, sampleTrack) {
//     if (err) return console.error(err)
//     console.log('track "' + sampleTrack.spotify.name + '" saved to collection.')
// })

const testPlaylistTracks = await getPlaylistTracks(
    '5NOIhb4nrzrw15skiTKYEF?si=44dfb0a0b36a42e8'
)

testPlaylistTracks.forEach(async (track) => {
    var track = new Track({
        ObjectId: mongoose.Types.ObjectId(),
        spotify: track,
    })
    await track.save(function (err, track) {
        if (err) return console.error(err)
        console.log('track "' + track.spotify.name + '" saved to collection.')
    })
})




// get sample movie poster
const testImage = await getTestPoster(1396)

// send poster to frontend
server.get('/dev/testimage', (req, res) => {
    res.status(200).send({ testImage })
})
