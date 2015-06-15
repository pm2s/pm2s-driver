var p = require('path');
var fs = require('fs-extra');

var name = 'pms';
var dirname = '.pms';
var rootPath;
var logPath;
var configPath;

var homePath = process.env.HOME || process.env.HOMEPATH;

rootPath = homePath ? p.resolve(homePath, dirname) : p.resolve('/etc', dirname);
logPath = p.resolve(rootPath, name + '.log');
configPath = p.resolve(rootPath, 'conf.js');

fs.ensureDirSync(rootPath);

module.exports = {
	name: name,
	rootPath: rootPath,
	logPath: logPath,
	configPath: configPath
};
