const router = require('express').Router();

const todoController = require("../controller/todo_controller.js")


router.get("/todo", todoController.todoGetAll)

router.get("/todo/:id", todoController.todoGet)

router.post("/todo", todoController.todoAdd)

router.put("/todo/:id", todoController.todoUpdate)

router.delete("/todo/:id", todoController.todoDelete)

module.exports = router

