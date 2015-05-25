#!/usr/bin/env node

var program = require('commander');
var actions = require('./actions');

program.version('0.0.1');

program
	.command('start')
	.description('start tracking PM2 events')
	.action(actions.start);

program
	.command('stop')
	.description('stop tracking PM2 events')
	.action(actions.stop);

program.parse(process.argv);

// display help by default (if no command was provided)
if (!process.argv.slice(2).length) {
	program.help();
}
