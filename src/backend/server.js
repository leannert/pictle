import {} from 'dotenv/config'
import express from 'express'
import { connectToMongoDB } from './db/conn.js'
import { getTwitchAuth, getTestGameCover } from './auth/igdb.js'
import { getSpotifyAuth, getTestTrack } from './auth/spotify.js'
import { getTestPoster } from './auth/tmdb.js'
import { authTest } from './auth/authtest.js'
import mongoose from 'mongoose'
import Types from 'mongoose'
import { users } from './db/init.js'
import { createAvatar } from '@dicebear/avatars'


let server = express()
const PORT = process.env.PORT || 8000
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.listen(PORT, () => console.log(`listening on port ${PORT}`))
server.get('/api/hello', (req, res) => {
    res.status(200).send('Message from the server')
})

// connect to MongoDB
let db = connectToMongoDB()
// create users collection
let usersCollection = users()

// api authentication test
const authenticationStatus = await authTest()

// get sample movie poster
const testImage = await getTestPoster(1396)

// send poster to frontend
server.get('/dev/testimage', (req, res) => {
    res.status(200).send({ testImage })
})
