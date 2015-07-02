'use strict';

var path = require('../../paths');

var gulp = require('gulp');

gulp.task('fullpage:scss', function() {
	gulp.src('bower_components/fullpage/jquery.fullPage.scss')
		.pipe(gulp.dest(path.lib.scss + 'fullpage/'));
});

gulp.task('fullpage:js', function() {
	gulp.src('bower_components/fullpage/jquery.fullPage.min.js')
		.pipe(gulp.dest(path.lib.js));
});

gulp.task('fullpage:vendor', function() {
	gulp.src('bower_components/fullpage/vendors/*.min.js')
		.pipe(gulp.dest(path.lib.js));
});



gulp.task('fullpage', ['fullpage:scss', 'fullpage:js', 'fullpage:vendor']);