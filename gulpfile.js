//Connect to gulp
var gulp = require("gulp");

//Connect to sass module
var sass = require("gulp-sass")

//Create task
gulp.task('scss', function(){
  gulp.src('sass/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'));
});
