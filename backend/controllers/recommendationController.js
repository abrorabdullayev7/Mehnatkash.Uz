const ProviderProfile = require("../models/ProviderProfile");

exports.recommendProviders = async (req, res) => {
  try {
    const { categoryId, maxPrice, minRating = 3 } = req.query;

    const filter = { isApproved: true, avgRating: { $gte: Number(minRating) } };
    if (categoryId) filter.categoryIds = categoryId;
    if (maxPrice) filter.minPrice = { $lte: Number(maxPrice) };

    const providers = await ProviderProfile.find(filter)
      .sort({ avgRating: -1, completedJobs: -1 })
      .limit(20)
      .populate("userId", "fullName city district");

    return res.json(providers);
  } catch (error) {
    return res.status(500).json({ message: "Tavsiya olishda xato", error: error.message });
  }
};
