import express from 'express'
import passport from 'passport'

export const googleAuthRouter = express.Router()

googleAuthRouter.get(
    '/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

googleAuthRouter.get(
    '/google/redirect',
    passport.authenticate('google'),
    (req, res) => {
        
        res.redirect('http://localhost:3000')
    }
)
