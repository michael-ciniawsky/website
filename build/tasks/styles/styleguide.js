'use strict';

var path  = require('../../paths');

var gulp  = require('gulp'),
    guide = require('gulp-styledown');


gulp.task('styleguide', function () {
    return gulp.src(path.scss + 'page.md')
        .pipe(guide({ config: path.scss + 'page.md', filename: 'styleguide.html' }))
        .pipe.dest(path.out.css);
});
