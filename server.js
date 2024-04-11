const { createServer } = require("http");
const indexController = require("./controllers/index.controller");

const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("/", indexController.index);
app.post("/create", indexController.create);

const server = createServer(app);

module.exports = {
  server,
  PORT,
};