#!/usr/bin/env node
var uglass = require('./lib/server.js'),
    cli = require('cli'),
    args = {port: ['p', 'Listen on this port', 'number', 3000]};

cli.parse(args);
cli.main(function(arguments, options) {
  uglass.start(options.port);
});
