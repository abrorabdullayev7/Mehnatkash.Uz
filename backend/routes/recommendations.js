const express = require("express");
const { recommendProviders } = require("../controllers/recommendationController");

const router = express.Router();

router.get("/providers", recommendProviders);

module.exports = router;
