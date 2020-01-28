const express = require ("express");
const routes = express.Router();

// Controllers
const UserController = require ("./controllers/UserController");
const ListController = require ("./controllers/ListController")

routes.get("/users", UserController.index);
routes.get("/lists", ListController.index);

module.exports = routes;