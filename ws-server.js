const { Server } = require("socket.io");

let wsServer = null;

function init(server) {
  wsServer = new Server(server);

  wsServer.on("connection", (socket) => {
    socket.on("disconnect", () => {
      console.log("A user has disconnected.");
    });
    console.log("A user has connected.");
  });
}

function getWsServer() {
  if (!wsServer) throw new Error('WS Server not initialized');
  return wsServer;
}

module.exports = {
  init,
  getWsServer,
};