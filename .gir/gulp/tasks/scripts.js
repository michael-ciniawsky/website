// ------------------------------------
// 		#SCRIPTS
// ------------------------------------

import path from '../paths'

import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'

let $ = gulpLoadPlugins()

module.exports = function () {
  return gulp.src(path.scripts)
    .pipe($.standard())
    .pipe($.standard.reporter('default', {
      breakOnError: true
    }))
}

module.exports = function () {
  return gulp.src(path.scripts)
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest(path.dist.scripts))
}
