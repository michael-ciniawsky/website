'use strict';

var path = require('../../paths');

var gulp = require('gulp');


gulp.task('scrollmagic', ['scrollmagic:js', 'scrollmagic:libs']);


	gulp.task('scrollmagic:js', function() {
		gulp.src('bower_components/scrollmagic/scrollmagic/minified/scrollMagic.min.js')
			.pipe(gulp.dest(path.lib.js.body));
	});

	gulp.task('scrollmagic:libs', function() {
		gulp.src('bower_components/scrollmagic/scrollmagic/minified/plugins/*.min.js')
			.pipe(gulp.dest(path.lib.js.body));
	});