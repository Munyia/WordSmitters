import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema
({ 

 title: {
    type: String,
    required: true
},
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    year:{
        type: String,
        required: true
    },
    posterURL: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    chapters: {
        type: [String],
        required: true
    }
});

const Books = mongoose.model("Book'", bookSchema);
export default User;