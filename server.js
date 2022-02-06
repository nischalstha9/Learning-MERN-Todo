const express = require("express");
const app = express();
//importing database connection
const connectDB = require("./config/db");

const port = 3000;
app.use(express.json());

// routes
const TaskRoutes = require("./routes/Task");

connectDB();

app.listen(port);
console.log(`Server is running on http://localhost:${port}`);

app.get("/", function (req, res) {
  res.send({ detail: "Server is up and running." });
});

app.use("/api/v1/tasks", TaskRoutes);
