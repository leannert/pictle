import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const LogoSchema = new mongoose.Schema(
    {
        Objectid: {
            type: mongoose.Types.ObjectId,
            required: [true, "can't be blank"],
            default: mongoose.Types.ObjectId(),
            unique: true,
        },
        iamge: {
            type: Object,
            required: [true, "image can't be blank"],
            unique: true,
        },
        name: {
            type: Object,
            required: [true, "name can't be blank"]
        },
    },
    { timestamps: true },
    { collection: 'logos' }
)

LogoSchema.plugin(uniqueValidator, { message: '{TYPE} of {VALUE} is already taken, expected {PATH} to be unique.' })

export const Logo = mongoose.model('logo', LogoSchema)