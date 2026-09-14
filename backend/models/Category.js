const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    nameUz: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    icon: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
