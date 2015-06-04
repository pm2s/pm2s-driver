var axon  = require('pm2-axon');
var sub = axon.socket('sub-emitter');

var notify = require('./notify');

function sendNotification(e, d) {
	var eventType = e;
	var eventName = d.event ? d.event : '';
	notify('[' + d.process.name + ']: ' + eventType + ' ' + eventName);
}

function start() {
	// TODO: copy resolving pm2 socket path from https://github.com/Unitech/PM2/blob/master/constants.js
	var socketPath = '/home/vagrant/.pm2/pub.sock';
	sub.connect(socketPath); // [socket path] is '~/.pm2/pub.sock' by default.
	sub.on('*', sendNotification);
}

start();
