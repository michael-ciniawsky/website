'use strict';

var path = require('../../paths');

var gulp = require('gulp');


gulp.task('font-awesome:less', function() {
    gulp.src('./bower_components/font-awesome/less/font-awesome.less')
        .pipe(gulp.dest(path.lib.less + 'font-awesome/'));
});

gulp.task('font-awesome:sass', function() {
    gulp.src('./bower_components/font-awesome/scss/font-awesome.scss')
        .pipe(gulp.dest(path.lib.scss + 'font-awesome/'));
});

gulp.task('font-awesome:css', function() {
    gulp.src('./bower_components/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest(path.lib.css));
});

gulp.task('font-awesome:fonts', function() {
    gulp.src('./bower_components/font-awesome/fonts/*.{eot, svg, ttf, oft, woff, woff2}')
        .pipe(gulp.src(path.out.font));
});



gulp.task('font-awesome', ['font-awesome:css', 'font-awesome:fonts']);