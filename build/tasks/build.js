'use strict';

var path = require('../paths');

var gulp = require('gulp');


gulp.task('build-html', ['html']);
gulp.task('build-css',  ['sass', 'css']);
gulp.task('build-js',   ['babel', 'js']);
gulp.task('build-img',  ['img', 'svg']);
gulp.task('build-docs', ['sassdoc', 'jsdoc', 'styleguide']);
gulp.task('build-libs', ['font-awesome:sass', 'font-awesome:fonts',
						 'bootstrap:sass', 'bootstrap:fonts','bootstrap:js',
						 'jquery', 'scrollmagic', 'fullpage'
						]);



gulp.task('build',  ['build-html', 'build-css', 'build-js', 'build-img', 'build-libs', 'build-docs']);
