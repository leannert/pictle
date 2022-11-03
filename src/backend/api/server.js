import {} from 'dotenv/config'
import express from 'express'
import { getTwitchAuth, getTestGameCover } from './auth/igdb.js'
import { getSpotifyAuth, getTestTrack } from './auth/spotify.js'
import { getTestPoster } from './auth/tmdb.js'
import { authTest } from './auth/authtest.js'
import mongoose from 'mongoose'

let server = express()
const PORT = process.env.PORT || 8000
server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.listen(PORT, () => console.log(`listening on port ${PORT}`))
server.get('/api/hello', (req, res) => {
    res.status(200).send('Message from the server')
})

// configure mongoose

const uri = "mongodb+srv://markmaci:"+process.env.MONGO_DB_PASSWORD+"@cluster0.cxshujt.mongodb.net/?retryWrites=true&w=majority";
mongoose
    .connect(uri, { 
        useNewUrlParser: true
      })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));
// console.log(global.db)

const authenticationStatus = await authTest()


const testImage = await getTestPoster(128)

server.get('/dev/testimage', (req, res) => {
    res.status(200).send({ testImage })
})
