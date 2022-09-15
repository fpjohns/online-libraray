const Book = require("../models/Book.model");
const User = require("../models/User.model");
module.exports.booksController = {
  getAllBook: async (req, res) => {
    try {
      const book = await Book.find();
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  },
  createBook: async (req, res) => {
    try {
      const book = await Book.create({
        name: req.body.name,
        _genreId: req.body._genreId,
      });
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  },
  changeBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  },
  deleteBook: async (req, res) => {
    try {
      const book = await Book.deleteOne(req.params.id);
    } catch (e) {
      res.json(e);
    }
  },

  getAllBookByGenre: async (req, res) => {
    try {
      const book = await Book.find({ _genreId: req.params.id }).populate(
        "_genreId",
        "name"
      );
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  },
  changeBookById: async (req, res) => {
    try {
      const user = await User.findById(req.params._userId);
      const book = await Book.findById(req.params._bookId);
      if (user.rentedBooks.length >= 3) {
        return res.json("нельзя арендовать больше 3-х книг одновременно");
      }
      if (user.isBlocked === true) {
        return res.json("этот пользователь заблокирован");
      }
      if (book.isRented !== null) {
        res.json("книга уже арендована");
      } else {
        await book.updateOne({
          isRented: req.params._userId,
        });
        await user.updateOne({
          $push: { rentedBooks: req.params._bookId },
        });
        return res.json("юзер арендовал книгу");
      }
    } catch (e) {
      res.json(e);
    }
  },
};
