import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import crypto from 'crypto'

const pfpSeed = crypto.randomBytes(64).toString('hex')

const UserSchema = new mongoose.Schema(
    {
        ObjectId: {
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

UserSchema.plugin(uniqueValidator, { message: 'is already taken.' })

export const User = mongoose.model('user', UserSchema)
