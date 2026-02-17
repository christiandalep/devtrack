require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const taskRoutes = require("./routes/taskRoutes");
app.use("/api/tasks", taskRoutes);

app.get("/status", (req, res) => {
  res.status(200).json({
    message: "API is running",
  });
});

const connectToDB = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("Successfully connected to Database"))
    .catch((err) => console.log(err));
};

app.listen(port, () => {
  connectToDB();
  console.log(`Server is running on port ${port}`);
});
