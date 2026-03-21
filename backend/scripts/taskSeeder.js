const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dummyTasks = require("./dummyData");
const Task = require("../models/Task");

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Successfully connected to DB");

    await Task.deleteMany({});
    console.log("Database Cleared");

    await Task.insertMany(dummyTasks);
    console.log("Database Seeded");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDatabase();
