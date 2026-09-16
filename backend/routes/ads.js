const express = require("express");
const { listAds, createAd, updateAd } = require("../controllers/adController");

const router = express.Router();

router.get("/", listAds);
router.post("/", createAd);
router.put("/:id", updateAd);

module.exports = router;
