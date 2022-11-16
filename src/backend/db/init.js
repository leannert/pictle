import mongoose from 'mongoose'
import { User } from './models/User.js'
import { Track } from './models/Track.js'
import { Game } from './models/Game.js'
import { getPlaylistTracks } from '../api/spotify.js'
import { getPopularGames, getGameCover } from '../api/igdb.js'

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
    const testPlaylist = await getPlaylistTracks(
        '5NOIhb4nrzrw15skiTKYEF?si=44dfb0a0b36a42e8'
    )

    testPlaylist.forEach(async (track) => {
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
                console.log('game "' + game.igdb.name + '" saved to collection.')
            })
        }
    })
}
