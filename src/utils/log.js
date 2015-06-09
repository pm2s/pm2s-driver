var fs = require('fs');
var fsConfig = require('../../config/fs');

var logStream = openLog(fsConfig.logPath);

function openLog(logfile) {
	return fs.createWriteStream(logfile, {
		flags: 'a',
		encoding: 'utf8',
		mode: 0644
	});
}

function log(msg) {
	logStream.write(msg + '\n');
}

module.exports = log;
