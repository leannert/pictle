import mongoose from 'mongoose'
import { User } from './models/User.js'
import { Track } from './models/Track.js'
import { Game } from './models/Game.js'
import { Movie } from './models/Movie.js'
import { getPlaylistTracks } from '../api/spotify.js'
import { getPopularGames, getGameCover } from '../api/igdb.js'
import { getTopMovies } from '../api/tmdb.js'

export async function initializeDB() {
    // create a new user
    const testUser = new User({
        _id: mongoose.Types.ObjectId(),
        username: 'sampleuser',
        email: 'sampleuser@gmail.com',
        password: 'samplepassword',
    })
    await testUser.save(function (err, user) {
        if (err) return console.error(err)
        console.log('User ' + user.username + ' saved to collection.')
    })

    // create tracks
    const playlist = await getPlaylistTracks(
        '5oB1tNVDWdXPqUU3gDBMrR?si=43543f1d530c440a'
    )

    console.log('playlist items array length is ' + playlist.length)

    playlist.forEach(async (track) => {
        var track = new Track({
            _id: mongoose.Types.ObjectId(),
            spotify: track,
        })
        await track.save(function (err, track) {
            if (err) return console.error(err)
            console.log(
                'track "' + track.spotify.name + '" saved to collection.'
            )
        })
    })

    // create games
    const popularGames = await getPopularGames()
    var droppedGameRequests = 0

    popularGames.forEach(async (popularGame) => {
        var game = new Game({
            _id: mongoose.Types.ObjectId(),
            igdb: popularGame,
            cover: await getGameCover(popularGame.id),
        })

        if (game.cover == undefined) {
            console.log(
                'Dropping game ' + game.igdb.name + ' due to rate limit.'
            )
            droppedGameRequests++
            return
        } else {
            await game.save(function (err, game) {
                if (err) return console.error(err)
                console.log(
                    'game "' + game.igdb.name + '" saved to collection.'
                )
            })
        }
    })

    // create movies
    var topMovies = []
    for (let i = 1; i < 6; i++) {
        const movies = await getTopMovies(i)
        movies.forEach((movie) => {
            topMovies.push(movie)
        })
    }

    topMovies.forEach(async (movie) => {
        var movie = new Movie({
            _id: mongoose.Types.ObjectId(),
            tmdb: movie,
        })

        await movie.save(function (err, movie) {
            if (err) return console.error(err)
            console.log('movie "' + movie.tmdb.title + '" saved to collection.')
        })
    })
}
