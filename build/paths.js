var root   = './',
    dist   = './dist/',
    src    = './src/',
    server = './server/',
    tests  = './tests/';


module.exports = {

    html:  src  + 'html/*.html',
    less:  src  +  'css/*.less',
	scss:  src  +  'css/*.scss',
	css:   src  +  'css/**/*.css',
	js:    src  +   'js/**/*.js',
    img:   src  +  'img/**/*',
    svg:   src  +  'img/**/*.svg',
    lib:  {

        html: dist + 'html/',
        less: src  +  'css/libs',
		scss: src  +  'css/libs',
        css:  dist +  'css/libs/',
        js:   dist +   'js/libs/'
	},
    out: {

        html:  dist + 'html/',
		css:   dist + 'css/',
        js:    dist + 'js/',
        img:   dist + 'img/',
        svg:   dist + 'img/',
        font:  dist + 'fonts/'

    },
    unit:     tests + 'unit/',
    e2e: {

		src:  tests + 'e2e/src/*.js',
        dist: tests + 'e2e/dist/'

    },
    server: server
};
