import passport from 'passport'
import express from 'express'
import session from 'express-session'
import cors from 'cors'
import { usersRouter } from '../routes/users.js'
import { tracksRouter } from '../routes/tracks.js'
import { gamesRouter } from '../routes/games.js'
import { moviesRouter } from '../routes/movies.js'
import { googleAuthRouter } from '../routes/auth.js'
import './passport.js'

export function configureServer(server) {
    var corsOptions = {
        origin: "http://localhost:8000"
      };
    server.use(express.urlencoded({ extended: true }))
    server.use(express.json())
    server.use(cors(corsOptions))
    server.use(
        session({
            secret: 'testsecret',
            resave: 'false',
            saveUninitialized: 'true',
        })
    )
    server.use(passport.initialize())
    server.use(passport.session())

    server.use('/auth', googleAuthRouter)
    server.use('/users', usersRouter)
    server.use('/tracks', tracksRouter)
    server.use('/games', gamesRouter)
    server.use('/movies', moviesRouter)
}
