#!/usr/bin/env node
const { server } = require('../src/server');
const conf = require('../config/http.conf')

server.listen(conf.server.port, () => {
    console.log(`HTTP server is running on port  ${conf.server.port}`);
});