var gulp = require('gulp');
var mocha = require('gulp-mocha');

gulp.task('test', function() {
  return gulp.src(['test/*.js'], { read: false })
  .pipe(mocha({ reporter: 'list' }));
});

gulp.task('BDD', function() {
  return gulp.watch(['app/*.js','test/*.js'], ['test']);
});
