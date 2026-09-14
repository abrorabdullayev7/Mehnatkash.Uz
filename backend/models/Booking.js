const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: "ProviderProfile", required: true },
    serviceId: { type: mongoose.Schema.Types.ObjectId, ref: "Service", required: true },
    scheduledAt: { type: Date, required: true },
    addressText: { type: String, required: true },
    location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [69.2401, 41.2995] }
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "in_progress", "done", "cancelled"],
      default: "pending"
    },
    agreedPrice: { type: Number, default: 0 },
    notes: { type: String }
  },
  { timestamps: true }
);

bookingSchema.index({ customerId: 1 });
bookingSchema.index({ providerId: 1, status: 1 });
bookingSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Booking", bookingSchema);
