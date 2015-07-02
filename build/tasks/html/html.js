'use strict';

var root    = './';
var path    = require('../../paths');

var gulp    = require('gulp'),
    inject  = require('gulp-inject'),
    connect = require('gulp-connect');


gulp.task('html', function () {

	var css  = path.out.css + '*.min.css',
     	 js  = path.out.js  + '*.min.js';

	var css_lib = path.lib.css + '**/*.min.css',
         js_lib = path.lib.js  + '**/*.min.js';

	var  html = gulp.src({read: false}),
    	 body = gulp.src([css, js], {read: false});

    return gulp.src('./src/html/index.html')
		.pipe(inject(html, {starttag: '<!-- inject:html:{{ext}} -->'}))
        .pipe(inject(body))
        .pipe(gulp.dest(root))
        .pipe(connect.reload());
});
