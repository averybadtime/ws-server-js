const { server, PORT } = require('./server');
const { init } = require('./ws-server');

init(server);

server.listen(
  PORT,
  () => console.log("Server up & running")
);