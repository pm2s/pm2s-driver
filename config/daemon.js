module.exports = {
	name: 'pm2s',
	main: __dirname + '/../src/worker.js',
	pidfile: '/home/vagrant/pm2s.pid'	// TODO: change pidfile
};
