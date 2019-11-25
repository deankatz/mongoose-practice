const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/booksDB', { useNewUrlParser: true })
const Schema = mongoose.Schema

const bookSchema = new Schema({
    tilte: String,
    author: String,
    pages: Number,
    genres: [String],
    rating: Number
})

const Book = mongoose.model("Book", bookSchema)
module.exports = Book





