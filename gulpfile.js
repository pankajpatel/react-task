var gulp = require('gulp'),
    gutil = require('gulp-util'),
    react = require('gulp-react'),
    watchify = require('watchify'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    source = require('vinyl-source-stream'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat');

/* compile react to js*/
gulp.task('build', function() {
    var bundler = watchify(browserify({
        entries: ['./react/components/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true
    }));

    function build(file) {
        if (file) gutil.log('Recompiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('main.js'))
            .pipe(gulp.dest('./output'));
    };
    build();
    bundler.on('update', build);
});

/* compile scss to css */
gulp.task('scss', function(){
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./output'))
});

gulp.task('watch', function(){
    return gulp.watch('./scss/**/*.scss', ['scss'])
});


gulp.task('default', ['build', 'scss', 'watch'], function(){});