// router/todo.js
const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

const { getAllTasks, addNewTask } = require("../controllers/TaskController");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
router.get("/", getAllTasks);

/**
 * @route POST api/todo
 * @description add a new todo
 * @access public
 */
router.post(
  "/",
  body("name").not().isEmpty().withMessage("Task name is required!"),
  addNewTask
);

// /**
//  * @route PUT api/todo/:id
//  * @description update todo
//  * @access public
//  */
// router.put("/:id");

// /**
//  * @route DELETE api/todo/:id
//  * @description delete todo
//  * @access public
//  */
// router.delete("/:id");

module.exports = router;
