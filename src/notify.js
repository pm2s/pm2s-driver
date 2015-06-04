var fs = require('fs');

// TODO: in future this code will send messages to PM2S app
// now it is writing messages to file, just for test
var logStream = openLog('/home/vagrant/pm2s.log');

function openLog(logfile) {
	return fs.createWriteStream(logfile, {
		flags: "a", encoding: "utf8", mode: 0644
	});
}

function log(msg) {
	logStream.write(msg + '\n');
}

module.exports = log;
