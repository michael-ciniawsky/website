'use strict';


var tasks   = require('require-dir')('build/tasks'),
	devs    = require('require-dir')('build/tasks/devs'),
	html    = require('require-dir')('build/tasks/html'),
	styles  = require('require-dir')('build/tasks/styles'),
	scripts = require('require-dir')('build/tasks/scripts'),
	img     = require('require-dir')('build/tasks/img'),
	tests   = require('require-dir')('build/tasks/tests'),
	vendors = require('require-dir')('build/tasks/vendors');	