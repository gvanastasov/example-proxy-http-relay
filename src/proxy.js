const http = require('http');
const conf = require('../config/http.conf');

const targetHost = process.env.TARGET_HOST || conf.server.host;
const targetPort = conf.server.port;

const proxy = http.createServer((req, res) => {
  console.log(`client: ${ req.socket.remoteAddress }`);

  const proxyReq = http.request({
    host: targetHost,
    port: targetPort,
    method: req.method,
    path: req.url,
    headers: {
      'x-forwarded-for': req.socket.remoteAddress,
    }
  }, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  req.pipe(proxyReq);
});

module.exports = { proxy };
