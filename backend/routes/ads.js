const express = require("express");
const { listAds, createAd } = require("../controllers/adController");

const router = express.Router();

router.get("/", listAds);
router.post("/", createAd);

module.exports = router;
