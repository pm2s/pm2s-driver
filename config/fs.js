var p = require('path');
var fs = require('fs');

var name = 'pms';
var dirname = '.pms';
var rootPath;
var logPath;

var homePath = process.env.HOME || process.env.HOMEPATH;

rootPath = homePath ? p.resolve(homePath, dirname) : p.resolve('/etc', dirname);
logPath = p.resolve(rootPath, name + '.log');

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
	logPath: logPath
};
