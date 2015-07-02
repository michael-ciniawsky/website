'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
    less    = require('gulp-less'),
    prefix  = require('gulp-autoprefixer'),
	maps    = require('gulp-sourcemaps'),
    rename  = require('gulp-rename'),
	changed = require('gulp-changed'),
    connect = require('gulp-connect');


gulp.task('less', function () {
    return gulp.src(path.less)
        .pipe(changed(path.less))
	    .pipe(maps.init())
        .pipe(prefix('last 2 versions'))
        .pipe(less())
        .pipe(rename('page.css'))
		.pipe(maps.write('./'))
        .pipe(gulp.dest(path.out.css))
        .pipe(connect.reload());
});
