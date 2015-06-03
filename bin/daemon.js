// TODO: mv to config
var opts = {
	main: __dirname + '/actions/start.js',
	name: 'pm2s',
	pidfile: '/home/vagrant/pm2s.pid'
};

var daemon = require('daemonize2').setup(opts);


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
