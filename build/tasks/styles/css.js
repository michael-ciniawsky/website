'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
    css     = require('gulp-css'),
	gzip    = require('gulp-gzip'),
    size    = require('gulp-size'),
    rename  = require('gulp-rename'),
	changed = require('gulp-changed'),
    connect = require('gulp-connect');


gulp.task('css', function () {
    return gulp.src(path.css)
        .pipe(changed(path.css))
        .pipe(css())
        .pipe(size())
        .pipe(rename('page.min.css'))
        .pipe(gulp.dest(path.out.css))
        .pipe(gzip())
        .pipe(size())
        .pipe(gulp.dest(path.out.css))
        .pipe(connect.reload());
});
