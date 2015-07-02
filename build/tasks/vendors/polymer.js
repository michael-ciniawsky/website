'use strict';

var path = require('../../paths');

var gulp  = require('gulp');



gulp.task('polymer', ['polymer:html', 'polymer:js']);

	gulp.task('polymer:html', function() {
		gulp.src('bower_components/polymer/polymer.html')
			.pipe(gulp.dest(path.lib.html));
	});

	gulp.task('polymer:js', function() {
		gulp.src('bower_components/webcomponentsjs/webcomponents.min.js')
			.pipe(gulp.dest(path.lib.js));
	});