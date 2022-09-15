const Genre = require("../models/Genre.model");

module.exports.genresController = {
  getAllGenre: async (req, res) => {
    try {
      const genre = await Genre.find();
      res, json(genre);
    } catch (e) {
      res.json(e);
    }
  },
  createGenre: async (req, res) => {
    try {
      const genre = await Genre.create({
        name: req.body.name,
      });
      res.json(genre);
    } catch (e) {
      res.json(e);
    }
  },
  changeGenre: async (req, res) => {
    try {
      const genre = await Genre.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(genre);
    } catch (e) {
      res.json(e);
    }
  },
  deleteGenre: async (req, res) => {
    try {
      const book = await Genre.deleteOne(req.params.id);
      res.json(book);
    } catch (e) {
      res.json(e);
    }
  },
};
