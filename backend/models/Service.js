const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: "ProviderProfile", required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    priceType: {
      type: String,
      enum: ["fixed", "hourly", "negotiable"],
      default: "fixed"
    },
    price: { type: Number, default: 0 },
    currency: { type: String, default: "UZS" },
    city: { type: String, required: true, trim: true },
    district: { type: String, trim: true },
    tags: [{ type: String }],
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true }
);

serviceSchema.index({ categoryId: 1, city: 1, price: 1 });

module.exports = mongoose.model("Service", serviceSchema);
