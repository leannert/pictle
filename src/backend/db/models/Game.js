import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const GameSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Types.ObjectId,
            required: [true, "can't be blank"],
            default: mongoose.Types.ObjectId(),
        },
        igdb: {
            type: Object,
            required: [true, "igdb can't be blank"],
            unique: true,
        },
        cover: {
            type: Object,
            required: [true, "cover can't be blank"],
        },
    },
    { timestamps: true },
    { collection: 'games' }
)

GameSchema.plugin(uniqueValidator, { message: '{PATH} of {VALUE} is already taken, expected {PATH} to be unique.' })

export const Game = mongoose.model('game', GameSchema)
