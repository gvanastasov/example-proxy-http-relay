const http = require('http');

const targetHost = 'example.com';
const targetPort = 80;

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
