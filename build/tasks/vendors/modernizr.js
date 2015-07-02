'use strict';

var path = require('../../paths');

var gulp = require('gulp');


gulp.task('modernizr', function() {
    gulp.src('./bower_components/modernizr/modernizr.js')
        .pipe(gulp.dest(path.lib.js));
});
