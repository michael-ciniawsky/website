'use strict';

var path = require('../../paths');

var gulp  = require('gulp'),
	jsdoc = require('gulp-jsdoc');


gulp.task('jsdoc', function() {
	return gulp.src(path.js)
		.pipe(jsdoc.parser('documentation'))
		.pipe(jsdoc.generator(path.js));
});
