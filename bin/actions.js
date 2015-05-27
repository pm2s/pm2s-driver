var axon  = require('pm2-axon');
var sub = axon.socket('sub-emitter');

function start() {
	// TODO: copy resolving pm2 socket path from https://github.com/Unitech/PM2/blob/master/constants.js
	var socketPath = '/home/vagrant/.pm2/pub.sock';
	sub.connect(socketPath); // [socket path] is '~/.pm2/pub.sock' by default.
	sub.on('*', function(e, d){
		console.log('[' + d.process.name + ']: ', e, d.event ? d.event : '');
		if (d.event == 'exit') {
			console.log(d);
		}
	});
}

function stop() {}

module.exports = {
	start: start,
	stop: stop
};
