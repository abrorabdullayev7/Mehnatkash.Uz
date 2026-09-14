const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({ nameUz: 1 });
        return res.json(categories);
    } catch (error) {
        return res.status(500).json({ message: "Kategoriyalarni olishda xato", error: error.message });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create(req.body);
        return res.status(201).json(category);
    } catch (error) {
        return res.status(500).json({ message: "Kategoriya yaratishda xato", error: error.message });
    }
};
