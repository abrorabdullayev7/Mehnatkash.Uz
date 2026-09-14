const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true, unique: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: "ProviderProfile", required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, trim: true }
  },
  { timestamps: true }
);

reviewSchema.index({ providerId: 1, rating: -1 });

module.exports = mongoose.model("Review", reviewSchema);
