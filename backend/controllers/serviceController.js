const Service = require("../models/Service");

exports.createService = async (req, res) => {
  try {
    const service = await Service.create(req.body);
    return res.status(201).json(service);
  } catch (error) {
    return res.status(500).json({ message: "Xizmat yaratishda xato", error: error.message });
  }
};

exports.getServices = async (req, res) => {
  try {
    const { city, categoryId, q, minPrice, maxPrice } = req.query;
    const filter = { isActive: true };

    if (city) filter.city = city;
    if (categoryId) filter.categoryId = categoryId;
    if (q) filter.title = { $regex: q, $options: "i" };

    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    const services = await Service.find(filter).sort({ createdAt: -1 });
    return res.json(services);
  } catch (error) {
    return res.status(500).json({ message: "Xizmatlarni olishda xato", error: error.message });
  }
};
