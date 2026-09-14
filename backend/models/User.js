const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["customer", "provider", "admin"],
      required: true,
      default: "customer"
    },
    fullName: { type: String, required: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    passwordHash: { type: String, required: true },
    language: { type: String, enum: ["uz", "ru"], default: "uz" },
    city: { type: String, trim: true },
    district: { type: String, trim: true },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [69.2401, 41.2995] }
    },
    avatarUrl: { type: String },
    isVerified: { type: Boolean, default: false }
  },
  { timestamps: true }
);

userSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("User", userSchema);
