var p = require('path');
var main = require('./fs');

var name = main.name;
var worker = p.resolve(__dirname, '../src/worker.js');
var pidfile = p.resolve(main.rootPath, main.name + '.pid');

module.exports = {
	name: name,
	main: worker,
	pidfile: pidfile
};
