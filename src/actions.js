var daemonOpts = require('../config/daemon');
var daemon = require('daemonize2').setup(daemonOpts);
var configService = require('./config');

function start() {
	daemon.start();
}

function stop() {
	daemon.stop();
}

function restart() {
	daemon.stop(function () {
		daemon.start();
	});
}

function status() {
	var pid = daemon.status();
	var statusString;
	if (pid) {
		statusString = daemonOpts.name + ' daemon is running, PID: ' + pid;
	} else {
		statusString = daemonOpts.name + ' daemon is not running';
	}
	console.log(statusString);
}

function config(key, value) {
	var data;

	if (key && value) {
		configService.set(key, value);
	} else if (key) {
		data = configService.get(key);
	} else {
		data = configService.list();
	}

	if (data) {
		console.log(data);
	}
}

module.exports = {
	start: start,
	stop: stop,
	restart: restart,
	status: status,
	config: config
};
