const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connect("mongodb://127.0.0.1:27017/pomodoroAPI");
const port = process.env.PORT || 3000;

const Todo = require("./models/todoModel");
const todoRouter = require("./routes/todoRouter")(Todo);

app.use("/api", todoRouter);

app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
