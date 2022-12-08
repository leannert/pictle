import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'
import crypto from 'crypto'



// function generatePfp() {
//     const pfpSeed = crypto.randomBytes(64).toString('hex')
//     return 'https://avatars.dicebear.com/api/pixel-art/' + pfpSeed + '.svg'
// }

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
            default: function () {
                const pfpSeed = crypto.randomBytes(64).toString('hex')
                return 'https://avatars.dicebear.com/api/pixel-art/' + pfpSeed + '.svg'
            }
        },

        stats: {
            type: Object,
            required: [true, "can't be blank"],

            default: {
                gamesPlayed: 0,
                winPercentage: 0,
                currentStreak: 0,
                maxStreak: 0,
                totalScore: 0,
                averageScore: 0,
                guessDistribution: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                },
            },
            gamesPlayed: {
                type: Number,
                required: [true, "can't be blank"],
                default: 0,
            },

            winPercentage: {
                type: Number,
                required: [true, "can't be blank"],
                default: 0,
            },

            currentStreak: {
                type: Number,
                required: [true, "can't be blank"],
                default: 0,
            },

            maxStreak: {
                type: Number,
                required: [true, "can't be blank"],
                default: 0,
            },

            totalScore: {
                type: Number,
                required: [true, "can't be blank"],
                default: 0,
            },

            averageScore: {
                type: Number,
                required: [true, "can't be blank"],
                default: 0,
            },

            guessDistribution: {
                type: Object,
                required: [true, "can't be blank"],

                1: {
                    type: Number,
                    required: [true, "can't be blank"],
                    default: 0,
                },
                2: {
                    type: Number,
                    required: [true, "can't be blank"],
                    default: 0,
                },
                3: {
                    type: Number,
                    required: [true, "can't be blank"],
                    default: 0,
                },
                4: {
                    type: Number,
                    required: [true, "can't be blank"],
                    default: 0,
                },
                5: {
                    type: Number,
                    required: [true, "can't be blank"],
                    default: 0,
                },
            },
        },
    },
    { timestamps: true },
    { collection: 'users' }
)

UserSchema.plugin(uniqueValidator, {
    message:
        '{TYPE} of {VALUE} is already taken, expected {PATH} to be unique.',
})

export const User = mongoose.model('user', UserSchema)
