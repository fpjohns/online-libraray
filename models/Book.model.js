const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
  name: String,
  isRented: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
    ref: "User",
  },
  _genreId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre",
  },
  returnBook: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
