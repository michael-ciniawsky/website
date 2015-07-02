'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
    sass    = require('gulp-sass'),
    prefix  = require('gulp-autoprefixer'),
	maps    = require('gulp-sourcemaps'),
    rename  = require('gulp-rename'),
	changed = require('gulp-changed'),
    connect = require('gulp-connect');


gulp.task('sass', function () {
    return gulp.src(path.scss)
        .pipe(changed(path.scss))
		.pipe(maps.init())
        .pipe(prefix('last 2 versions'))
        .pipe(sass())
        .pipe(rename('page.css'))
		.pipe(maps.write('./'))
        .pipe(gulp.dest(path.out.css))
        .pipe(connect.reload());
});