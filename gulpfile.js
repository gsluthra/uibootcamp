var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');

gulp.task('coffee', function(){
	gulp.src('app/src/*.coffee').pipe(coffee()).pipe(gulp.dest('public/js'));
});

gulp.task('css', function(){
	gulp.src('app/styles/*.scss').pipe(sass()).pipe(gulp.dest('public/css'));
});

