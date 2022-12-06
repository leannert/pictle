import express from 'express'
import { Movie } from '../db/models/Movie.js'
export const moviesRouter = express.Router()

moviesRouter.get('/', async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

moviesRouter.get('/random', async (req, res) => {
    try {
        const randomMovie = await Movie.aggregate([{ $sample: { size: 1 } }])
        res.json(randomMovie)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

moviesRouter.get('/:id', getMovie, (req, res) => {
    res.json(res.movie)
})

moviesRouter.post('/', async (req, res) => {
    const movie = new Movie({
        ObjectId: req.body.ObjectId,
        tmdb: req.body.tmdb,
    })
    try {
        const newMovie = await movie.save()
        res.status(201).json(newMovie)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

moviesRouter.patch('/:id', getMovie, async (req, res) => {
    if (req.body.ObjectId != null) {
        res.game.ObjectId = req.body.ObjectId
    }
    if (req.body.tmdb != null) {
        res.game.tmdb = req.body.tmdb
    }
    try {
        const updatedMovie = await res.game.save()
        res.json(updatedMovie)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

moviesRouter.delete('/:id', getMovie, async (req, res) => {
    try {
        await res.movie.remove()
        res.json({ message: 'Deleted Movie' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getMovie(req, res, next) {
    let movie
    try {
        movie = await Movie.findById(req.params.id)
        if (movie == null) {
            return res.status(404).json({ message: 'Cannot find movie' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.movie = movie
    next()
}
