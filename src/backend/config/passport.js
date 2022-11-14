import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'
import { User } from '../db/models/User.js'
import mongoose from 'mongoose'

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
            callbackURL: 'http://localhost:8000/auth/google/redirect',
        },
        (accessToken, refreshToken, profile, done) => {
            // check if user already exists in our own db
            User.findOne({ googleId: profile.id }).then((currentUser) => {
                if (currentUser) {
                    // already have this user
                    console.log('user is: ', currentUser)
                    return done(null, currentUser)
                } else {
                    // if not, create user in our db
                    new User({
                        _id: new mongoose.Types.ObjectId(),
                        googleId: profile.id,
                        username: profile._json.email.split('@')[0],
                        email: profile._json.email,
                        password: profile._json.sub,
                    })
                        .save()
                        .then((newUser) => {
                            console.log(
                                'created new user via Google: ',
                                newUser.username
                            )
                            return done(null, newUser)
                        })
                }
            })
        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})
