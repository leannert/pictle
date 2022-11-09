import express from 'express'
import { Track } from '../db/models/Track.js'
export const tracksRouter = express.Router()

// getting all
tracksRouter.get('/', async (req, res) => {
    try {
        const tracks = await Track.find()
        res.json(tracks)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// getting one
tracksRouter.get('/:id', getTrack, (req, res) => {
    res.json(res.track)
})

// creating one
tracksRouter.post('/', async (req, res) => {
    const track = new Track({
        ObjectId: req.body.ObjectId,
        spotify: req.body.spotify,
    })
    try {
        const newTrack = await track.save()
        res.status(201).json(newTrack)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// updating one
tracksRouter.patch('/:id', getTrack, async (req, res) => {
    if (req.body.ObjectId != null) {
        res.track.ObjectId = req.body.ObjectId
    }
    if (req.body.spotify != null) {
        res.track.spotify = req.body.spotify
    }
    try {
        const updatedTrack = await res.track.save()
        res.json(updatedTrack)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

// deleting one
tracksRouter.delete('/:id', getTrack, async (req, res) => {
    try {
        await res.track.remove()
        res.json({ message: 'Deleted Track' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// middleware
async function getTrack(req, res, next) {
    let track
    try {
        track = await Track.findById(req.params.id)
        if (track == null) {
            return res.status(404).json({ message: 'Cannot find track' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.track = track
    next()
}
