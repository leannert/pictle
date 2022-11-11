import {} from 'dotenv/config'
import express from 'express'
import { connectToMongoDB } from './db/conn.js'
import { getTestPoster } from './api/tmdb.js'
import { authTest } from './api/authtest.js'
import { initializeDB } from './db/init.js'
import { usersRouter } from './routes/users.js'
import { tracksRouter } from './routes/tracks.js'
import { gamesRouter } from './routes/games.js'
import { getLogo } from './api/clearbit.js'
import mongoose from 'mongoose'

let server = express()
const PORT = process.env.PORT || 8000
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.listen(PORT, () => console.log(`listening on port ${PORT}`))
server.get('/api/hello', (req, res) => {
    res.status(200).send('Message from the server')
})

// api authentication test
const authenticationStatus = await authTest()

// connect to MongoDB
let db = await connectToMongoDB()

// initialize db with data from apis
initializeDB()

// use routes
server.use('/users', usersRouter)
server.use('/tracks', tracksRouter)
server.use('/games', gamesRouter)

// get sample movie poster
const testImage = await getTestPoster(1396)

// send poster to frontend
server.get('/dev/testimage', (req, res) => {
    res.status(200).send({ testImage })
})
