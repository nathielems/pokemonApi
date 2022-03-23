const { Router } = require("express");
const controller = require("../controllers/pokemon.controller")

const routes = new Router();

routes.get("/", controller.getByName);

module.exports = routes