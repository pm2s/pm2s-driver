#!/usr/bin/env node

var pm2 = require('pm2');

pm2.launchBus(function(err, bus) {
	console.log('connected', bus);

	bus.on('log:out', function(data) {
		console.log(arguments);
	});
});
