'use strict';

var path = require('../../paths');

var gulp = require('gulp');


gulp.task('angular', function() {
    gulp.src('./bower_components/angular/angular.min.js')
        .pipe(gulp.dest(path.lib.js));
});

gulp.task('angular-bootstrap', ['angular-bootstrap:css', 'angular-bootstrap:js']);

	gulp.task('angular-bootstrap:css', function() {
		gulp.src('./bower_components/angular-bootstrap/ui-bootstrap-csp.css')
			.pipe(gulp.dest(path.lib.css));
	});

	gulp.task('angular-bootstrap:js', function() {
		gulp.src(['./bower_components/angular-bootstrap/ui-bootstrap.min.js',
			  	  './bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js' ])
			.pipe(gulp.dest(path.lib.js));
	});