const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  res.write('Hello, world!');
  
  res.end();
});

module.exports = { server };

