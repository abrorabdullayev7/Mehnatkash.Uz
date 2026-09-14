const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    bookingId: { type: mongoose.Schema.Types.ObjectId, ref: "Booking", required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: "ProviderProfile", required: true },
    amount: { type: Number, required: true },
    commissionAmount: { type: Number, default: 0 },
    paymentMethod: { type: String, enum: ["cash", "click", "payme", "card"], default: "cash" },
    status: { type: String, enum: ["pending", "paid", "failed", "refunded"], default: "pending" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
