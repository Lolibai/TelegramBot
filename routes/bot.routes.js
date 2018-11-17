var express = require("express");
var botRouter = express.Router();
var botController = require("../controllers/bot.controller");

botRouter.get("/", botController.default);
botRouter.post("/sendMessage", botController.sendMessage);
botRouter.post("/sendFile", botController.sendFile);

module.exports = botRouter;
