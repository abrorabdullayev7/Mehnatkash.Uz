const express = require("express");
const { createReview, getProviderReviews } = require("../controllers/reviewController");

const router = express.Router();

router.post("/", createReview);
router.get("/:providerId", getProviderReviews);

module.exports = router;
