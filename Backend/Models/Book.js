import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true, 
    },
    author: {
        type: String,
        required: true, 
    },
    description: {
        type: String,
        required: true, 
    },
    price: {
        type: Number,
        required: true, 
    },
    image: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true, 
    },
    ISBN: {
        type: Number, 
        required: false,
    },
    genre: {
        type: String,
        required: false, 
    }
})

export default mongoose.model("Book",bookSchema);