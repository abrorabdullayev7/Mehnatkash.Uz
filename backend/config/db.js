const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

let memoryMongo = null;

async function connectDB(uri) {
  try {
    if (!uri) {
      memoryMongo = await MongoMemoryServer.create();
      uri = memoryMongo.getUri();
      console.log("MongoDB fallback: using in-memory server");
    }

    await mongoose.connect(uri);
    console.log("MongoDB connected");
    return { memoryMongo };
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
