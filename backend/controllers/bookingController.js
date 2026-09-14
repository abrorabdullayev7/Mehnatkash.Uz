const Booking = require("../models/Booking");
const ProviderProfile = require("../models/ProviderProfile");
const User = require("../models/User");
const Service = require("../models/Service");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    // Topilgan booking asosida ish beruvchining telefon raqamini qaytarish va xizmatni nofaol qilish
    try {
      const provider = await ProviderProfile.findById(booking.providerId);
      if (provider) {
        const posterUser = await User.findById(provider.userId).select("phone fullName");
        // Service ni nofaol qilish (job olib qo'yilgani uchun)
        if (booking.serviceId) {
          await Service.findByIdAndUpdate(booking.serviceId, { isActive: false });
        }
        return res.status(201).json({ booking, posterPhone: posterUser ? posterUser.phone : null });
      }
    } catch (innerErr) {
      console.warn("Booking yaratildi, lekin poster telefonini olishda xato:", innerErr.message);
    }

    return res.status(201).json(booking);
  } catch (error) {
    return res.status(500).json({ message: "Band qilishda xato", error: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const { customerId, providerId, status } = req.query;
    const filter = {};

    if (customerId) filter.customerId = customerId;
    if (providerId) filter.providerId = providerId;
    if (status) filter.status = status;

    const bookings = await Booking.find(filter).sort({ createdAt: -1 });
    return res.json(bookings);
  } catch (error) {
    return res.status(500).json({ message: "Buyurtmalarni olishda xato", error: error.message });
  }
};
