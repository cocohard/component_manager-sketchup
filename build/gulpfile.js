const gulp = require('gulp');
const zip = require('gulp-zip');
const { deleteSync } = require('del');

const DIST = '../dist';
const EXT_NAME = 'component-manger';
const SRC = '../src/**/*';

gulp.task('clean', (done) => {
  deleteSync([`${DIST}/${EXT_NAME}.rbz`], { force: true });
  done();
});

gulp.task('compile', (done) => {
  console.log("Compilación simulada.");
  done();
});

gulp.task('build', gulp.series('clean', 'compile', () => {
  return gulp.src(SRC, { base: '../src' })
    .pipe(zip(`${EXT_NAME}.rbz`))
    .pipe(gulp.dest(DIST));
}));