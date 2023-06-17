const http = require('http');
const conf = require('../config/http.conf');

const targetHost = conf.server.host;
const targetPort = conf.server.port;

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
