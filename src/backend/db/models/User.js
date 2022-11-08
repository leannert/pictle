import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

export const UserSchema = new mongoose.Schema(
  {
    ObjectId: {
      type: String,
      required: [true, "can't be blank"],
      index: true,
    },

    username: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9]+$/, "is invalid"],
      index: true,
    },

    email: {
      type: String,
      lowercase: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    
    password: {
        type: String,
        required: [true, "can't be blank"],
    },
    pfp: String,
    hash: String,
    salt: String,
  },
  { timestamps: true }
);

UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

  

mongoose.model("User", UserSchema);
