import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const LogoSchema = new mongoose.Schema(
    {
        Objectid: {
            type: mongoose.Types.ObjectId,
            required: [true, "can't be blank"],
            default: mongoose.Types.ObjectId(),
        },
        logo: {
            
        }
    }
)