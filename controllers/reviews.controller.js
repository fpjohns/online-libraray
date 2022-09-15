const Review = require("../models/Review.model");
module.exports.reviewsController = {
  getAllReview: async (req, res) => {
    try {
      const review = Review.find();
      res.json(review);
    } catch (e) {
      res.json(e);
    }
  },
  createReview: async (req, res) => {
    try {
      const review = Review.create({
        text: req.body.text,
        _bookId: req.body._bookId
      });
      res.json(review);
    } catch (e) {
      res.json(e);
    }
  },
  changeReview: async (req, res) => {
    try {
      const review = Review.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
      });
      res.json(review);
    } catch (e) {
      res.json(e);
    }
  },
  deleteReview: async (req, res) => {
    try {
      const review = Review.deleteOne(req.params.id);
      res.json(review);
    } catch (e) {
      res.json(e);
    }
  },
};
