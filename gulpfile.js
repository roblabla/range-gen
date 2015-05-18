var gulp = require('gulp');

var babel = require('gulp-babel');
var options = {
  stage: 0, // Dat ES7 goodness
  optional: ["runtime"]
};

var sourcemaps = require('gulp-sourcemaps');

gulp.task('compile', function() {
  gulp
    .src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel(options))
    .pipe(sourcemaps.write('maps/'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.js', ['compile']);
});

gulp.task('default', ['compile']);
