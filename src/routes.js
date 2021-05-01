const express = require("express");
const routes = express.Router();
const UserController = require("./Controller/UserController");

routes.get("/", (req, res) => {
  res.send("Teste");
});

routes.get("/users", UserController.findAll);
routes.post("/insert", UserController.insert);
routes.get("/users/:id", UserController.findById);

module.exports = routes;
