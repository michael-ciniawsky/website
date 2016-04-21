// ------------------------------------
// 		#HTML
// ------------------------------------

import path from '../paths'

import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'

const $ = gulpLoadPlugins()

import {posthtml as plugins} from '../settings'

var inject = (name = 'index') => {
  function config (name) {
    return {
      name: name,
      relative: true,
      ignorePath: '../public',
      addRootSlash: true
      // addPrefix: ''
    }
  }
  function source (file) {
    return gulp.src(
      [
        path.dist.styles + `${file}.css`,
        path.dist.scripts + `${file}.js`,
        path.dist.scripts + `${file}.vendor.js`
      ], {read: false}
    )
  }
  return $.inject(source(name), config(name))
}

module.exports = function () {
  gulp.src(pages)
    .pipe($.plumber())
    .pipe($.posthtml(plugins))
    .pipe(gulp.dest(path.dist.pages))
}
