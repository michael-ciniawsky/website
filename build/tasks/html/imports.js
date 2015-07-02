'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
	vulc    = require('gulp-vulcanize');


gulp.task('imports', function () {
	gulp.src(path.html + 'imports/*.html')
		.pipe(vulc())
		.pipe(gulp.dest(path.out.html + 'imports/'));
});