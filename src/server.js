const http = require('http');

const server = http.createServer((_req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  const data = {
    message: 'Example Relay Proxy',
  };

  res.write(JSON.stringify(data));
  
  res.end();
});

module.exports = { server };

