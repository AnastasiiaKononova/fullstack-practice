const http = require('http');
const app = require('./app');

const server = http.createServer(app);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
});