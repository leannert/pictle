import mongoose from 'mongoose'

export const connectToMongoDB = async () => {
    const uri =
        'mongodb+srv://harry:' +
        process.env.MONGO_DB_PASSWORD +
        '@pictledb.gnokgad.mongodb.net/pictle?retryWrites=true&w=majority'
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => console.log(err))

    const db = mongoose.connection
    db.on('open', (error) => console.log('Connected to Database'))
    db.on('error', (error) => console.log(error))
    return db
}
