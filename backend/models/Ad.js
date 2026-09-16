const mongoose = require("mongoose");

const adSchema = new mongoose.Schema(
  {
    ownerId: { type: String, required: true, trim: true },
    ownerName: { type: String, trim: true, default: "E'lon egasi" },
    ownerAvatar: { type: String, default: "" },
    name: { type: String, required: true, trim: true },
    spec: { type: String, required: true, trim: true },
    price: { type: Number, default: 0 },
    region: { type: String, trim: true, default: "" },
    district: { type: String, trim: true, default: "" },
    phone: { type: String, trim: true, default: "" },
    bio: { type: String, trim: true, default: "" },
    address: { type: String, trim: true, default: "" },
    avatar: { type: String, default: "" },
    booked: { type: Boolean, default: false },
    bookedBy: { type: String, default: null },
    bookedById: { type: String, default: null },
    bookedAt: { type: Date, default: null },
    resolution: { type: String, enum: ["pending", "resolved", "unresolved"], default: "pending" },
    rating: { type: Number, min: 1, max: 5, default: null },
    ratingComment: { type: String, default: "" },
    ratedAt: { type: Date, default: null }
  },
  { timestamps: true }
);

adSchema.index({ ownerId: 1, createdAt: -1 });
adSchema.index({ region: 1, district: 1 });

module.exports = mongoose.model("Ad", adSchema);
