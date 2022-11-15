import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import crypto from 'crypto'

const pfpSeed = crypto.randomBytes(64).toString('hex')

const UserSchema = new mongoose.Schema(
    {
        _id: {
            type: mongoose.Types.ObjectId,
            required: [true, "can't be blank"],
            default: mongoose.Types.ObjectId(),
        },

        username: {
            type: String,
            lowercase: true,
            required: [true, "can't be blank"],
            match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
            index: true,
            unique: true,
        },

        email: {
            type: String,
            lowercase: true,
            required: [true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, 'is invalid'],
            index: true,
            unique: true,
        },

        password: {
            type: String,
            required: [true, "can't be blank"],
        },

        googleId: {
            type: String,
        },

        googleAcessToken: {
            type: String,
        },

        googleRefreshToken: {
            type: String,
        },

        pfp: {
            type: String,
            required: [true, "can't be blank"],
            default:
                'https://avatars.dicebear.com/api/pixel-art/+' +
                pfpSeed +
                '.svg',
        },
    },
    { timestamps: true },
    { collection: 'users' }
)

UserSchema.plugin(uniqueValidator, { message: '{TYPE} of {VALUE} is already taken, expected {PATH} to be unique.' })

export const User = mongoose.model('user', UserSchema)
