const http = require('http');
const {Server} = require('socket.io');
const app = require('./app');
const {createWebSocketConnect} = require('./websocket');

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', createWebSocketConnect)

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});