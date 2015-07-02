'use strict';

var path = require('../../paths');

var gulp = require('gulp');


gulp.task('jquery', function() {
    gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest(path.lib.js));
});
