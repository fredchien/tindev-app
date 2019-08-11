const express = require("express");

const DevController = require("./controllers/DevController");
const DislikeController = require("./controllers/DislikeController");
const LikeController = require("./controllers/LikeController");

const routes = new express.Router();

// DEV routes
routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);

// DESLIKE
routes.post("/devs/:devId/dislikes", DislikeController.store);

// LIKES
routes.get("/devs/likes", LikeController.index);
routes.post("/devs/:devId/likes", LikeController.store);

module.exports = routes;
