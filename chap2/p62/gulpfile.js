/*
  반복적인 작업을 설정하여 Gulp를 통해 작업을 수행합니다.
  const는 상수를 선언하는 키워드입니다. var 대신 사용했습니다.
  require는 노드가 제공하는 빌트인 함수입니다.
  'gulp' 문자열로 node_modules 폴더 밑에 프로그램이 제공하는
  기능을 가져옵니다.
*/
const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function () {
  gulp.src('es6/**/*.js').pipe(babel())
    .pipe(gulp.dest('dist'));
    
  gulp.src('public/es6/**/*.js').pipe(babel())
    .pipe(gulp.dest('public/dist'));
});