"use strict";

var gulp = require('gulp'),
    connect = require('connect'),
    serveStatic = require('serve-static'),
    connectLivereload = require('connect-livereload'),
    gulpLivereload = require('gulp-livereload'),
    webpack = require('webpack-stream'),
    uglify = require('gulp-uglify'),
    postcss = require('gulp-postcss'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint');

var path = {
       src: 'src/',
      html: 'src/**/*.html',
        js: 'src/js/**/*.js',
       css: 'src/css/styles.css',
      dist: 'dist/',
}

var localPort = 7000,
       lrPort = 35729;

gulp.task('server', function(){
  var server = connect();
  server.use(connectLivereload({port: lrPort}));
  server.use(serveStatic(path.dist));
  server.listen(localPort);
  console.log("\nlocal server running at http://localhost:" + localPort + "/\n");
});

gulp.task('styles', function(){
  gulp.src(path.css)
    .pipe(postcss([
      require('precss'),
      require('autoprefixer')
    ]))
    .pipe(cssnano())
    .pipe(gulp.dest(path.dist))
    .pipe(gulpLivereload());
});

gulp.task('scripts', function() {
	gulp.src(['./src/js/app.js'])
    .pipe(webpack({
        output: {
          filename: 'app.js',
        },
      }))
    .pipe(uglify())
    .pipe(gulp.dest(path.dist))
    .pipe(gulpLivereload());
});

gulp.task('jshint', function(){
  gulp.src(path.src + 'js/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(gulpLivereload());
});

gulp.task('html', function(){
  gulp.src(path.html)
    .pipe(gulp.dest(path.dist))
    .pipe(gulpLivereload());
});

gulp.task('watch', function(){
  gulp.watch(path.postcss, ['styles']);
  gulp.watch(path.js, ['jshint']);
  gulp.watch(path.js, ['scripts']);
  gulp.watch(path.html, ['html']);

  gulpLivereload.listen();
});

gulp.task('default', ['server', 'watch']);
