const mongoose = require("mongoose");

const providerProfileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    categoryIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
    bio: { type: String, maxlength: 500 },
    experienceYears: { type: Number, min: 0, default: 0 },
    minPrice: { type: Number, default: 0 },
    maxPrice: { type: Number, default: 0 },
    avgRating: { type: Number, min: 0, max: 5, default: 0 },
    totalReviews: { type: Number, default: 0 },
    completedJobs: { type: Number, default: 0 },
    availability: [
      {
        day: { type: String },
        start: { type: String },
        end: { type: String }
      }
    ],
    documents: [{ type: { type: String }, fileUrl: { type: String } }],
    isApproved: { type: Boolean, default: false },
    // Region (viloyat) va district (tuman)
    region: { type: String, trim: true },
    district: { type: String, trim: true },
    // Ishlash rejimi: on-site, online yoki both
    isOnline: { type: Boolean, default: false },
    workMode: { type: String, enum: ["on-site", "online", "both"], default: "on-site" },
    // Foydalanuvchi ish qabul qilayaptimi (true) yoki ish joyi qo'yayaptimi (false)
    isAcceptingJobs: { type: Boolean, default: true }
  },
  { timestamps: true }
);

providerProfileSchema.index({ categoryIds: 1, avgRating: -1 });

module.exports = mongoose.model("ProviderProfile", providerProfileSchema);
