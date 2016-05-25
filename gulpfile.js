"use strict";

var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    connectLivereload = require('connect-livereload'),
    gulpLivereload = require('gulp-livereload'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint');

var path = {
       src: 'src/',
      html: 'src/**/*.html',
        js: 'src/js/*.js',
   postcss: 'src/css/**/*.css',
      dist: 'dist/',
}

var localPort = 4000,
       lrPort = 35729;

gulp.task('server', function(){
  var server = connect();

  server.use(connectLivereload({port: lrPort}));
  server.use(serveStatic(path.src));
  server.listen(localPort);

  console.log("\nlocal server running at http://localhost:" + localPort + "/\n");
});

gulp.task('styles', function(){
  gulp.src('src/css/styles.css')
    .pipe(postcss([
      require('precss'),
      require('autoprefixer'),
      require('postcss-reporter')
    ]))
    .pipe(cssnano())
    .pipe(gulp.dest('./dist/'))
    .pipe(gulpLivereload());
});

gulp.task('scripts', function() {
	gulp.src('./src/js/app.js')
		.pipe(browserify({
		  insertGlobals : true,
		  debug : !gulp.env.production
		}))
    .on('prebundle', function(bundle) {
      bundle.external('domready');
    })
		.pipe(gulp.dest('./dist/'))
    .pipe(gulpLivereload());
});

gulp.task('jshint', function(){
  gulp.src(path.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulpLivereload());
});

gulp.task('html', function(){
  gulp.src(path.html)
    .pipe(gulp.dest('./dist/'))
    .pipe(gulpLivereload());
});

gulp.task('watch', function(){
  gulp.watch(path.postcss, ['styles']);
  gulp.watch(path.js, ['scripts']);
  gulp.watch(path.js, ['jshint']);
  gulp.watch(path.html, ['html']);

  gulpLivereload.listen();
});

gulp.task('default', ['server', 'watch']);
