const cleanCSS = require('gulp-clean-css');
const gulp = require('gulp')


gulp.task('css', function () {
  gulp.src('main.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('css'))