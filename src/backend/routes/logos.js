import express from 'express'
import { Logo } from '../db/models/Logo.js'
export const logosRouter = express.Router()

logosRouter.get('/', async (req, res) => {
    try {
        const logos = await Logo.find()
        res.json(logos)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

logosRouter.get('/:id', getLogo, (req, res) => {
    res.json(res.logo)
})

logosRouter.post('/', async (req, res) => {
    const logo = new Logo({
        ObjectId: req.body.ObjectId,
        image: req.body.image,
        name: req.body.name,
    })
    try {
        const newLogo = await logo.save()
        res.status(201).json(newLogo)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

logosRouter.patch('/:id', getLogo, async (req, res) => {
    if (req.body.ObjectId != null) {
        res.logo.ObjectId = req.body.ObjectId
    }
    if (req.body.image != null) {
        res.logo.image = req.body.image
    }
    if (req.body.name != null) {
        res.logo.name = req.body.name
    }
    try {
        const updatedLogo = await res.logo.save()
        res.json(updatedLogo)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})

logosRouter.delete('/:id', getLogo, async (req, res) => {
    try {
        await res.logo.remove()
        res.json({ message: 'Deleted Logo' })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

async function getLogo(req, res, next) {
    let logo
    try {
        logo = await Logo.findById(req.params.id)
        if (logo == null) {
            return res.status(404).json({ message: 'Cannot find logo' })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.logo = logo
    next()
}
