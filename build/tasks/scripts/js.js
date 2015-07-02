'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
	js      = require('gulp-uglify'),
    gzip    = require('gulp-gzip'),
    size    = require('gulp-size'),
    rename  = require('gulp-rename'),
	changed = require('gulp-changed'),
    connect = require('gulp-connect');


gulp.task('js', function () {
    return gulp.src(path.js)
        .pipe(changed(path.js))
        .pipe(js())
        .pipe(size())
        .pipe(rename('page.min.js'))
        .pipe(gulp.dest(path.out.js))
        .pipe(gzip())
        .pipe(size())
        .pipe(gulp.dest(path.out.js))
        .pipe(connect.reload());
});
