const { Router } = require("express");
const router = Router();
const { reviewsController } = require("../controllers/reviews.controller");

router.get("/review", reviewsController.getAllReview);
router.post("/review", reviewsController.createReview);
router.patch("/review", reviewsController.changeReview);
router.delete("/review/:id", reviewsController.deleteReview);
module.exports = router;
