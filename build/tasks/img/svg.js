'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
    svg     = require('gulp-svgo'),
    size    = require('gulp-size'),
    changed = require('gulp-changed');

gulp.task('svg', function () {
    return gulp.src(path.svg)
        .pipe(changed(path.svg))
        .pipe(svg())
        .pipe(size())
        .pipe(gulp.dest(path.out.svg));
});
