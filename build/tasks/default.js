'use strict';

var path = require('../paths');

var gulp = require('gulp');


gulp.task('default', ['html', 'sass', 'css', 'js', 'connect'], function() {
    gulp.watch([path.html], ['html']);
    gulp.watch([path.scss], ['sass']);
    gulp.watch([path.css],  ['css']);
    gulp.watch([path.js],   ['js']);
});
