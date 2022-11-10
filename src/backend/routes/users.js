import express from 'express'
import { User } from '../db/models/User.js'
export const usersRouter = express.Router()

usersRouter.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

usersRouter.get('/:id', getUser, (req, res) => {
    res.json(res.user)
})

usersRouter.post('/', async (req, res) => {
    const user = new User({
        ObjectId: req.body.ObjectId,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        pfp: req.body.pfp,
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

usersRouter.patch('/:id', getUser, async (req, res) => {
    if (req.body.ObjectId != null) {
        res.user.ObjectId = req.body.ObjectId
    }
    if (req.body.username != null) {
        res.user.username = req.body.username
    }
    if (req.body.email != null) {
        res.user.email = req.body.email
    }
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

usersRouter.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({ message: 'Deleted User' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getUser(req, res, next) {
    let user
    try {
        user = await User.findById(req.params.id)
        if (user == null) {
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.user = user
    next()
}
