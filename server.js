require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const path = require("path");

const userRoutes = require("./routes/userRoutes");

// ✅ 1. initialize app FIRST
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API running...");
});

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.use(express.static(path.join(__dirname, "client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});