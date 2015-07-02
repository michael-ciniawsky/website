'use strict';

var path    = require('../../paths');

var gulp    = require('gulp'),
    connect = require('gulp-connect');


gulp.task('connect', function () {
     connect.server({
        root: './',
        port: 8080,
        livereload: true
    });
});
