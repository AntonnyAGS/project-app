const express = require ("express");
const routes = express.Router();

// Controllers
const UserController = require ("./controllers/UserController");
const ListController = require ("./controllers/ListController");
const ItemController = require ("./controllers/ItemController");

routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.put("/users/:id", UserController.update);
routes.post("/users", UserController.store);
routes.delete("/users/:id", UserController.remove);

routes.get("/lists", ListController.index);
routes.get("/lists/:id", ListController.show);
routes.put("/lists/:id", ListController.update);
routes.post("/lists", ListController.store);
routes.delete("/lists/:id", ListController.remove);

routes.post("/lists/:id/additem", ItemController.store);
routes.post("/lists/:id/removeitem", ItemController.remove);

module.exports = routes;