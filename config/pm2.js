var p = require('path');
var fs = require('fs');

var pm2RootPath;
var pm2PubSocket;
var pm2ConfFile;

if (process.env.PM2_HOME) {
	pm2RootPath = process.env.PM2_HOME;
} else if (process.env.HOME || process.env.HOMEPATH) {
	pm2RootPath = p.resolve(process.env.HOME || process.env.HOMEPATH, '.pm2');
} else {
	pm2RootPath = p.resolve('/etc', '.pm2');
}

pm2PubSocket = p.join(pm2RootPath, 'pub.sock');
pm2ConfFile = p.join(pm2RootPath, 'conf.js');

if (fs.existsSync(pm2ConfFile)) {
	try {
		var extra = require(pm2ConfFile)(pm2RootPath);
		pm2RootPath = extra.PM2_HOME || pm2RootPath;
		pm2PubSocket = extra.DAEMON_PUB_PORT || pm2PubSocket;
	} catch(e) {
		// TODO: do something here
	}
}

if (process.platform === 'win32' || process.platform === 'win64') {
	pm2PubSocket = '\\\\.\\pipe\\pub.sock';
}

module.exports = {
	rootPath: pm2RootPath,
	pubSocket: pm2PubSocket
};
