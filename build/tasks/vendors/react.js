'use strict';

var path = require('../../paths');

var gulp  = require('gulp');


gulp.task('react', function() {
    gulp.src('bower_components/react/react.min.js')
        .pipe(gulp.dest(path.lib.js));
});