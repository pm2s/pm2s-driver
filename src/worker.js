var axon  = require('pm2-axon');
var sub = axon.socket('sub-emitter');

var pm2 = require('../config/pm2');

var notify = require('./notify');

function sendNotification(type, data) {
	var msg = {
		type: type,
		data: data
	};

	notify(msg);
}

function start() {
	sub.connect(pm2.pubSocket);
	sub.on('process:*', sendNotification);
}

start();
