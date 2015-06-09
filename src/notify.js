var _ = require('lodash');
var http = require('http');

var serverConfig = require('../config/server');
var log = require('./utils/log');

function notify(msg) {
	var data = JSON.stringify({ data: msg });

	var reqOptions = _.extend({}, serverConfig, {
		headers: {
			'Content-Type': 'application/application/json',
			'Content-Length': data.length
		}
	});

	var req = http.request(reqOptions);

	req.on('error', function(e) {
		log(e);
	});

	req.write(data);
	req.end();
}

module.exports = notify;
