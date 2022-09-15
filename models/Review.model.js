const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
    text: String,
    _userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    _bookId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book'
    }
});
const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
