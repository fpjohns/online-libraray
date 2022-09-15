const User = require("../models/User.model");
const Book = require("../models/Book.model");
module.exports.usersController = {
  getAllUser: async (req, res) => {
    try {
      const user = await User.find();
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  createUser: async (req, res) => {
    try {
      const user = await User.create({
        name: req.body.name,
      });
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  changeUser: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await User.deleteOne(req.params.id);
      res.json(user);
    } catch (e) {
      res.json(e);
    }
  },
  ban: async (req, res) => {
    await User.findByIdAndUpdate(req.params.userId, {
      isBlocked: true,
      rentedBook: [],
    });
    await Book.find({ isRented: req.params.userId }).updateMany({
      isRented: null,
    });
    return res.json("пользователь заблокирован, и книги возвращены");
  },
};
