import { UserSchema } from './models/User.js'
import mongoose from 'mongoose'
import crypto from 'crypto'

var User = mongoose.model('User', UserSchema)

export const users = async () => {
    const pfpSeed = crypto.randomBytes(64).toString('hex') 
    var usersCollection = User.createCollection().then(function (collection) {
        console.log('Users Collection is created!')
    })
    var sampleUser = new User({
        ObjectId: mongoose.Types.ObjectId(),
        username: 'bobsmith',
        email: 'bobsmith@gmail.com',
        password: 'password',
        pfp: 'https://avatars.dicebear.com/api/pixel-art/+'+pfpSeed+'.svg'
    })
    
    sampleUser.save(function (err, sampleUser) {
        if (err) return console.error(err)
        console.log('User ' + sampleUser.username + ' saved to collection.')
    })
    return usersCollection
}
