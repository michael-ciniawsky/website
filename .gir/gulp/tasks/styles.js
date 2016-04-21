// ------------------------------------
// 		#STYLES
// ------------------------------------

import path from '../paths'

import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

import { postcss as plugins } from '../settings'

module.exports = function () {
  return gulp.src(path.styles)
    .pipe($.plumber())
    .pipe($.postcss(plugins))
    .pipe(gulp.dest(path.dist.styles))
}
