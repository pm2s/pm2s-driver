var p = require('path');
var fs = require('fs');

var name = 'pms';
var dirname = '.pms';
var rootPath;

if (process.env.HOME || process.env.HOMEPATH) {
	rootPath = p.resolve(process.env.HOME || process.env.HOMEPATH, dirname);
} else {
	rootPath = p.resolve('/etc', dirname);
}

// TODO: move to right place?
if (rootPath && !fs.existsSync(rootPath)) {
	try {
		fs.mkdirSync(rootPath);
	} catch(e) {}
}

module.exports = {
	name: name,
	rootPath: rootPath
};
