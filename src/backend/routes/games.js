import express from 'express'
import { Game } from '../db/models/Game.js'
export const gamesRouter = express.Router()

gamesRouter.get('/', async (req, res) => {
    try {
        const games = await Game.find()
        res.json(games)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

gamesRouter.get('/:id', getGame, (req, res) => {
    res.json(res.game)
})

gamesRouter.post('/', async (req, res) => {
    const game = new Game({
        ObjectId: req.body.ObjectId,
        igdb: req.body.igdb,
        cover: req.body.cover,
    })
    try {
        const newGame = await game.save()
        res.status(201).json(newGame)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

gamesRouter.patch('/:id', getGame, async (req, res) => {
    if (req.body.ObjectId != null) {
        res.game.ObjectId = req.body.ObjectId
    }
    if (req.body.igdb != null) {
        res.game.igdb = req.body.igdb
    }
    if (req.body.cover != null) {
        res.game.cover = req.body.cover
    }
    try {
        const updatedGame = await res.game.save()
        res.json(updatedGame)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

gamesRouter.delete('/:id', getGame, async (req, res) => {
    try {
        await res.game.remove()
        res.json({ message: 'Deleted Game' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getGame(req, res, next) {
    let game
    try {
        game = await Game.findById(req.params.id)
        if (game == null) {
            return res.status(404).json({ message: 'Cannot find game' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.game = game
    next()
}
