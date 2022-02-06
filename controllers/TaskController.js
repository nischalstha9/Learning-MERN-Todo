// controllers/TaskController.js

const Task = require("../schemas/Task");
const { body, validationResult } = require("express-validator");

exports.getAllTasks = async (req, res) => {
  try {
    let limit = req.query.limit;
    let skip = req.query.offset;
    let tasks = await Task.find({}).skip(skip).limit(limit).sort("desc");
    res.send(tasks);
  } catch (err) {
    console.log(err);
    res.json({ error: "An unknown error occoured!" });
  }
};

exports.addNewTask = async function (req, res) {
  let formData = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    await Task.create(formData);
    res.json(formData);
  } catch (err) {
    // res.send({
    //   errors: [
    //     {
    //       field: err.errors.name.properties.path,
    //       message: err.errors.name.properties.message,
    //     },
    //   ],
    // });
  }
};
