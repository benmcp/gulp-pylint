import gulp from 'gulp';
import shell from 'gulp-shell';
import PyLint from '../src/index.js';

gulp.task("pylint", function() {
  gulp.src('test/*.py', {read: true})
    .pipe(PyLint({}));
});