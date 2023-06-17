#!/usr/bin/env node
const { proxy } = require('../src/proxy');
const conf = require('../config/http.conf')

proxy.listen(conf.proxy.port, () => {
    console.log(`Proxy server is running on port ${conf.proxy.port}`);
});