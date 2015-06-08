var fs = require('fs');
var p = require('path');
var http = require('http');
var _ = require('lodash');

var serverConfig = require('../config/server');
var fsConfig = require('../config/fs');

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

function notify(msg) {
	var data = JSON.stringify({ data: msg });

	var reqOptions = _.extend({}, serverConfig, {
		headers: {
			'Content-Type': 'application/application/json',
			'Content-Length': data.length
		}
	});

	var req = http.request(reqOptions, function(res) {
		// TODO: remove logging
		log(res.statusCode + ' ' + data);
	});

	req.on('error', function(e) {
		log(e);
	});

	req.write(data);
	req.end();
}

module.exports = notify;
