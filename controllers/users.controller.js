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
  changeUser: async (req, res) => {
    try {
      const admin = User.findById(req.params._adminId);
      const user = User.findById(req.params._userId);
      const book = Book.findById(req.params._bookId);
      if (admin.returnBook) {
        return res.json("пользователь блокирутеся");
      }
      if (!user.isBlocked) {
        return res.json("вы не заблокированы и можете взять книгу в аренду");
      }
      if (user.rentedBook) {
        res.json("юзер хочет арендовать книгу");
      }
      if (!book.isRented) {
        await book.updateOne({
          $push: { rentedBook: [] },
        });
        return res.json("книга ни кем не арендуется");
      }
    } catch (e) {
      res.json(e);
    }
  },
};
