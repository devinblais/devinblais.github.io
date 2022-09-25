const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const minify = require('gulp-minify');

gulp.task('sass', function() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
})

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

 
gulp.task('compress', function() {
  gulp.src(['js/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('min'))
});