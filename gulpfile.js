var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var path = require('path');
var babel = require("gulp-babel");
var watch  = require('gulp-watch');
var preprocess = require('gulp-preprocess');
var clean = require('gulp-clean');

gulp.task('babel', function () {
    return gulp.src(['src/**/*.es6'])
        .pipe(babel())
        .pipe(gulp.dest('.tmp'));
});


gulp.task('build-jsx', function () {
    var stream = browserify({
        entries: './src/public/app/App.jsx',
        extensions: ['.jsx'],
        debug: true,
        transform: [babelify],
        fullPaths: false
    });
    return stream.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./.tmp/public/js/'));
});


gulp.task('clean', function () {
    return gulp.src('.tmp/', {read: false})
        .pipe(clean({force: true}));
});

gulp.task('styles', function() {
    gulp.src(['./src/public/less/**/*.less'])
        .pipe(less())
        .pipe(gulp.dest('.tmp/public/css'));
});

gulp.task('copy', function() {
    gulp.src('./src/public/index.html')
        // Perform minification tasks, etc here
        .pipe(gulp.dest('.tmp/public'));

    gulp.src('./src/public/assets/*')
        // Perform minification tasks, etc here
        .pipe(gulp.dest('.tmp/public/assets'));

});

gulp.task('watch', function() {
    watch('src/public/app/**/*.jsx', function() {
        gulp.start('build-jsx');
    });
    watch('src/public/less/**/*.less', function() {
        gulp.start('styles');
    });
    watch('src/**/*.es6', function() {
        gulp.start('babel');
    });

    watch('src/public/index.html', function() {
        gulp.start('copy');
    });
});

gulp.task('build', ['styles', 'babel', 'build-jsx', 'copy']);
gulp.task('default', ['build', 'watch']);