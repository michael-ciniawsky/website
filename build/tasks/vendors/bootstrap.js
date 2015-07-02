'use strict';

var path = require('../../paths');

var gulp = require('gulp');


gulp.task('bootstrap:less', function() {
	gulp.src('./bower_components/bootstrap/less/**/*.less')
		.pipe(gulp.dest(path.lib.less + 'bootstrap/'));
});

gulp.task('bootstrap:sass', function() {
	gulp.src('./bower_components/bootstrap-sass/assets/stylesheets/bootstrap/**/*.scss')
		.pipe(gulp.dest(path.lib.scss + 'bootstrap/'));
});

gulp.task('bootstrap:css', function() {
    gulp.src(['./bower_components/bootstrap/dist/css/bootstrap.min.css',
              './bower_components/bootstrap/dist/css/bootstrap-theme.min.css'])
        .pipe(gulp.dest(path.lib.css));
});

gulp.task('bootstrap:fonts', function() {
    gulp.src('./bower_components/bootstrap/dist/fonts/*.{eot, svg, ttf, woff, woff2}')
        .pipe(gulp.src(path.out.font));
});

gulp.task('bootstrap:js', function() {
    gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest(path.lib.js));
});



gulp.task('bootstrap', ['bootstrap:css', 'bootstrap:fonts', 'bootstrap:js']);