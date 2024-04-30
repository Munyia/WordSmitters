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
    coverImage: {
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    chapters: {
        type: [String],
        required: true
    },
  
});

const Book = mongoose.model("Book'", bookSchema);
export default Book;