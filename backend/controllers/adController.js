const Ad = require("../models/Ad");

exports.listAds = async (req, res) => {
  try {
    const ownerId = String(req.query.ownerId || "").trim();
    const filter = {};
    if (ownerId) filter.ownerId = ownerId;

    const ads = await Ad.find(filter).sort({ createdAt: -1 });
    return res.json({ ads });
  } catch (error) {
    return res.status(500).json({ message: "E'lonlarni olishda xatolik", error: error.message });
  }
};

exports.createAd = async (req, res) => {
  try {
    const data = req.body || {};
    const name = String(data.name || data.title || "").trim();
    const spec = String(data.spec || data.category || "").trim();
    const ownerId = String(data.ownerId || data.owner_id || "").trim();

    if (!name || !spec || !ownerId) {
      return res.status(400).json({ message: "Sarlavha, kategoriya va egasi majburiy" });
    }

    const ad = await Ad.create({
      ownerId,
      ownerName: data.ownerName || data.owner_name || "E'lon egasi",
      ownerAvatar: data.ownerAvatar || "",
      name,
      spec,
      price: Number(data.price || data.budget || 0),
      region: data.region || "",
      district: data.district || "",
      phone: data.phone || data.contact || "",
      bio: data.bio || data.description || "",
      address: data.address || "",
      avatar: data.avatar || "",
      booked: !!data.booked,
      bookedBy: data.bookedBy || null,
      bookedAt: data.bookedAt || null
    });

    return res.status(201).json({ ad });
  } catch (error) {
    return res.status(500).json({ message: "E'lon yaratishda xatolik", error: error.message });
  }
};
