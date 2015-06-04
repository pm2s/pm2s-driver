var axon  = require('pm2-axon');
var sub = axon.socket('sub-emitter');

var pm2 = require('../config/pm2');

var notify = require('./notify');

function sendNotification(e, d) {
	var eventType = e;
	var eventName = d.event ? d.event : '';
	notify('[' + d.process.name + ']: ' + eventType + ' ' + eventName);
}

function start() {
	sub.connect(pm2.pubSocket);
	sub.on('*', sendNotification);
}

start();
