var gulp = require('gulp');
var coffee = require('gulp-coffee');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var jasmine = require('gulp-jasmine');
var sassLint = require('gulp-sass-lint');
require('coffee-script/register')

gulp.task('coffee', function(){
	gulp.src('app/src/**/*.coffee').pipe(coffee()).pipe(gulp.dest('public/js'));
});

gulp.task('js', function() {
	gulp.src('app/src/home.coffee', {read: false})
		.pipe( browserify({transform: ['coffeeify'], extensions: ['.coffee']}) )
		.pipe( rename({extname: '.js'}) )
		.pipe( gulp.dest('public/js') );
});

gulp.task('css', function(){
	gulp.src('app/styles/**/*.scss')
        .pipe(sassLint())
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError())
		.pipe(sass()).pipe(gulp.dest('public/css'));
});

gulp.task('watch', function(){
	gulp.watch('app/src/**/*.coffee',['coffee']);
	gulp.watch('app/styles/**/*.scss',['css']);
});

var runSequence = require('run-sequence');
gulp.task('default', function(callback){
	runSequence(['coffee', 'css'], 'test', 'watch', callback)
});


gulp.task('test', function(){
    gulp.src('test/**/*.coffee').pipe(jasmine());
})



