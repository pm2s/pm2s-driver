var p = require('path');
var fs = require('fs');

var name = 'pms';
var dirname = '.pms';
var rootPath;
var logPath;
var configPath;

var homePath = process.env.HOME || process.env.HOMEPATH;

rootPath = homePath ? p.resolve(homePath, dirname) : p.resolve('/etc', dirname);
logPath = p.resolve(rootPath, name + '.log');
configPath = p.resolve(rootPath, 'conf.js');

// TODO: move to right place?
if (rootPath && !fs.existsSync(rootPath)) {
	try {
		fs.mkdirSync(rootPath);
	} catch(e) {
		// TODO: do something here
	}
}

module.exports = {
	name: name,
	rootPath: rootPath,
	logPath: logPath,
	configPath: configPath
};
