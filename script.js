export const mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/todo",
  () => {
    console.log("Database connected");
  },
  (err) => {
    console.log(err);
  }
);

async function runQuery() {}
