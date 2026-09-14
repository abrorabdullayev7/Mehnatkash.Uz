const mongoose = require("mongoose");
const Category = require("./models/Category");
const dotenv = require("dotenv");

dotenv.config();

const categories = [
    { nameUz: "Santexnika", slug: "santexnika", icon: "wrench" },
    { nameUz: "Elektrik", slug: "elektrik", icon: "zap" },
    { nameUz: "IT xizmati", slug: "it-xizmati", icon: "monitor" },
    { nameUz: "Tutor", slug: "tutor", icon: "book" },
    { nameUz: "Tozalash", slug: "tozalash", icon: "sparkles" },
    { nameUz: "Qurilish", slug: "qurilish", icon: "home" },
    { nameUz: "Mebel", slug: "mebel", icon: "armchair" }
];

async function seed() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB for seeding");

        for (const cat of categories) {
            const exists = await Category.findOne({ slug: cat.slug });
            if (!exists) {
                await Category.create(cat);
                console.log(`Created category: ${cat.nameUz}`);
            }
        }

        console.log("Seeding completed");
        process.exit(0);
    } catch (error) {
        console.error("Seeding error:", error);
        process.exit(1);
    }
}

seed();
