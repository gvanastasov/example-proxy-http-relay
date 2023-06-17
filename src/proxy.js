const http = require('http');

const targetHost = 'localhost';
const targetPort = 3001;

const proxy = http.createServer((req, res) => {
  const proxyReq = http.request({
    host: targetHost,
    port: targetPort,
    method: req.method,
    path: req.url,
    headers: req.headers
  }, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  req.pipe(proxyReq);
});

module.exports = { proxy };
