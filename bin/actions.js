var pm2 = require('pm2');

function start() {
	pm2.launchBus(function(err, bus) {
		console.log('connected', bus);

		bus.on('log:out', function(data) {
			console.log(arguments);
		});
	});
}

function stop() {
	pm2.disconnectBus();
}

module.exports = {
	start: start,
	stop: stop
};
