'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
    img     = require('gulp-image'),
    size    = require('gulp-size'),
    changed = require('gulp-changed');

gulp.task('img', function () {
    return gulp.src(path.img)
        .pipe(changed(path.img))
        .pipe(img())
        .pipe(size())
        .pipe(gulp.dest(path.out.img));
})
