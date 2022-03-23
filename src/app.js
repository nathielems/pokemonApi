const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors")

const routes = require('./routes/pokemon.routes');

class App {
  constructor () {
    this.server = express();

    this.server.use(bodyParser.urlencoded({ extended: true }))
    this.server.use(bodyParser.json())
    this.server.use(cors())

    this.routes();
  }

  routes() {
    this.server.use("/pokemon", routes)
  }
}

module.exports = new App().server;