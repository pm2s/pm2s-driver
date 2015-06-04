var fs = require('fs');
var p = require('path');

// TODO: in future this code will send messages to pms app
// now it is writing messages to file, just for test
var config = require('../config/main');
var logStream = openLog(p.resolve(config.rootPath, config.name + '.log'));

function openLog(logfile) {
	return fs.createWriteStream(logfile, {
		flags: "a", encoding: "utf8", mode: 0644
	});
}

function log(msg) {
	logStream.write(msg + '\n');
}

module.exports = log;
