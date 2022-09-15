const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  name: String,
  isBlocked: Boolean,
  rentedBooks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
  ],
  banUser: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});
const User = mongoose.model("User", userSchema);
module.exports = User;
