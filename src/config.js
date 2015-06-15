var fs = require('fs-extra');
var configFile = require('../config/fs').configPath;

function read() {
	return fs.readJsonSync(configFile, { throws: false });
}

function write(data) {
	fs.outputJsonSync(configFile, data);
}

function list() {
	return read();
}

function get(key) {
	var config = read();
	if (config && config[key]) {
		return config[key];
	}
}

function set(key, value) {
	var config = read() || {};
	config[key] = value;
	write(config);
}

module.exports = {
	list: list,
	get: get,
	set: set
};
