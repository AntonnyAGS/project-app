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
routes.get("/lists/:id", ListController.show);
routes.put("/lists/:id", ListController.update);
routes.post("/lists", ListController.create);
routes.delete("/lists/:id", ListController.remove);

module.exports = routes;