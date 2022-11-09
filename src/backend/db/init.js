import { User } from './models/User.js'
import { Track } from './models/Track.js'
import mongoose from 'mongoose'
import crypto from 'crypto'
import { getSpotifyAuth, getTrack } from '../api/spotify.js'



export const users = async () => {
    var usersCollection = User.createCollection().then(function (collection) {
        console.log('Users Collection created')
    })
    var sampleUser = new User({
        ObjectId: mongoose.Types.ObjectId(),
        username: 'bobsmith',
        email: 'bobsmith@gmail.com',
        password: 'password',
    })

    sampleUser.save(function (err, sampleUser) {
        if (err) return console.error(err)
        console.log('User ' + sampleUser.username + ' saved to collection.')
    })
    return usersCollection
}

// export const tracks = async () => {
//     var tracksCollection = Track.createCollection().then(function (collection) {
//         console.log('Tracks Collection created')
//     })
//     var sampleSpotify= await getTestTrack('7ez8WRX4sGhKHZryJPJCNg?si=iRs1mf4JQQifyVOLghUnEA')
//     var jsonSpotify = JSON.stringify(sampleSpotify)
//     var sampleTrack = new Track({
//         ObjectId: mongoose.Types.ObjectId(),
//         spotify: sampleSpotify.data,
//     })
//     console.log(JSON.stringify(sampleTrack))
    
//     // tracksCollection.insertOne(sampleTrack, function (err, sampleTrack) {
//     //     if (err) re  turn console.error(err)
//     //     console.log('Track ' + sampleTrack.name + ' saved to collection.')
//     // })
//     // sampleTrack.save(function (err, sampleSpotify) 
//     // {
//     //     if (err) return console.error(err)
//     //     console.log('Track ' + sampleTrack.name + ' saved to collection.')
//     // }
//     // )
//     return tracksCollection
// }
