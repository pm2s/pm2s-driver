var _ = require('lodash');
var http = require('http');

var httpConfig = require('../config/http');
var log = require('./utils/log');

function notify(msg) {
	var data = JSON.stringify({ data: msg });

	var reqOptions = _.extend({}, httpConfig, {
		headers: {
			'Content-Type': 'application/json',
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
