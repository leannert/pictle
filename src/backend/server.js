import {} from 'dotenv/config'
import express from 'express'
import { connectToMongoDB } from './db/conn.js'
import { getTestPoster } from './api/tmdb.js'
import { authTest } from './api/authtest.js'
import { configureServer } from './config/express.js'
import { initializeDB } from './db/init.js'

let server = express()

// configure server with express middleware
configureServer(server)

const PORT = process.env.PORT || 8000

// api authentication test
const authenticationStatus = await authTest()

// connect to MongoDB
let db = await connectToMongoDB()

// initialize db with data from apis
initializeDB()

// get sample movie poster
const testImage = await getTestPoster(1396)

// send test poster to frontend
server.get('/dev/testimage', (req, res) => {
    res.status(200).send({ testImage })
})

server.listen(PORT, () => console.log(`listening on port ${PORT}`))
server.get('/api/hello', (req, res) => {
    res.status(200).send('Message from the server')
})
