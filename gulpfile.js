var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');

gulp.task('coffee', function(){
	gulp.src('app/src/**/*.coffee').pipe(coffee()).pipe(gulp.dest('public/js'));
});

gulp.task('css', function(){
	gulp.src('app/styles/**/*.scss').pipe(sass()).pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
	gulp.watch('app/src/**/*.coffee',['coffee']);
	gulp.watch('app/styles/**/*.scss',['css']);
});

var runSequence = require('run-sequence');
gulp.task('default', function(callback){
	runSequence(['coffee', 'css'], 'test', 'watch', callback)
});

var jasmine = require('gulp-jasmine');
require('coffee-script/register')
gulp.task('test', function(){
    gulp.src('test/**/*.coffee').pipe(jasmine());
})



