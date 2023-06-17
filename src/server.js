const http = require('http');

const server = http.createServer((req, res) => {
  const client = req.headers['x-forwarded-for'];

  if (client) {
    console.log(`client: ${ client }`);
    console.log(`proxy: ${ req.socket.remoteAddress }`);
  } else {
    console.log(`client: ${ req.socket.remoteAddress }`);
  }

  res.writeHead(200, { 'Content-Type': 'application/json' });
  const data = {
    message: 'Example Relay Proxy',
  };
  res.write(JSON.stringify(data));
  res.end();
});

module.exports = { server };

