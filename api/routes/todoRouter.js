const express = require("express");

function routes(Todo) {
  const todoRouter = express.Router();

  todoRouter.route("/todos").get(async (req, res) => {
    const todos = await Todo.find();
    return res.json(todos);
  });

  return todoRouter; //middleware function
}

module.exports = routes;
