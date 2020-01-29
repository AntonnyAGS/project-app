const express = require ("express");
const routes = express.Router();

// Controllers
const UserController = require ("./controllers/UserController");
const ListController = require ("./controllers/ListController")

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.put("/users/:id", UserController.update);
routes.post("/users", UserController.store);
routes.delete("/users/:id", UserController.remove);

routes.get("/lists", ListController.index);

module.exports = routes;