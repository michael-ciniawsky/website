'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
	ts      = require('gulp-typescript'),
	maps    = require('gulp-sourcemaps'),
	size    = require('gulp-size'),
	concat  = require('gulp-concat'),
	changed = require('gulp-changed'),
    connect = require('gulp-connect');


gulp.task('ts', function() {
	gulp.src(path.ts)
		.pipe(changed(path.ts))
		.pipe(maps.init())
		.pipe(ts())
		.pipe(size())
		.pipe(concat('page.js'))
		.pipe(maps.write('./'))
		.pipe(gulp.dest(path.out.js))
		.pipe(connect.reload());
});