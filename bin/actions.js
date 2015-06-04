var daemonOpts = require('../config/daemon');
var daemon = require('daemonize2').setup(daemonOpts);

function start() {
	daemon.start();
}

function stop() {
	daemon.stop();
}

module.exports = {
	start: start,
	stop: stop
};
