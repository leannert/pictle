import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const MovieSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Types.ObjectId,
            required: [true, "can't be blank"],
            default: mongoose.Types.ObjectId(),
        },
        tmdb: {
            type: Object,
            required: [true, "igdb can't be blank"],
            unique: true,
        },
    },
    { timestamps: true },
    { collection: 'movies' }
)

MovieSchema.plugin(uniqueValidator, {
    message:
        '{PATH} of {VALUE} is already taken, expected {PATH} to be unique.',
})

export const Movie = mongoose.model('movie', MovieSchema)
