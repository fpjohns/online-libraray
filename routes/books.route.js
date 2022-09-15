const { Router } = require("express");
const router = Router();
const { booksController } = require("../controllers/books.controller");

router.get("/book", booksController.getAllBook);
router.get("/book/:id", booksController.getAllBookByGenre);
router.post("/book", booksController.createBook);
router.patch("/book", booksController.changeBook);
router.patch("/book/:_bookId/user/:_userId", booksController.changeBookById);
router.delete("/book/:id", booksController.deleteBook);

module.exports = router;
