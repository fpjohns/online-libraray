const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(require("./routes/books.route"));
app.use(require("./routes/genres.route"));
app.use(require("./routes/reviews.route"));
app.use(require("./routes/users.route"));

mongoose.connect(
  "mongodb+srv://fpjohns:denni2010@cluster0.7omondk.mongodb.net/online-library?retryWrites=true&w=majority",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("db connected");
    app.listen(port, () => {
      console.log("started");
    });
  }
);
