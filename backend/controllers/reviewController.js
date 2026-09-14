const Review = require("../models/Review");
const ProviderProfile = require("../models/ProviderProfile");

exports.createReview = async (req, res) => {
  try {
    const review = await Review.create(req.body);

    const stats = await Review.aggregate([
      { $match: { providerId: review.providerId } },
      {
        $group: {
          _id: "$providerId",
          avgRating: { $avg: "$rating" },
          totalReviews: { $sum: 1 }
        }
      }
    ]);

    if (stats.length) {
      await ProviderProfile.findOneAndUpdate(
        { _id: review.providerId },
        {
          avgRating: Number(stats[0].avgRating.toFixed(2)),
          totalReviews: stats[0].totalReviews
        }
      );
    }

    return res.status(201).json(review);
  } catch (error) {
    return res.status(500).json({ message: "Sharh yaratishda xato", error: error.message });
  }
};

exports.getProviderReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ providerId: req.params.providerId }).sort({ createdAt: -1 });
    return res.json(reviews);
  } catch (error) {
    return res.status(500).json({ message: "Sharhlarni olishda xato", error: error.message });
  }
};
