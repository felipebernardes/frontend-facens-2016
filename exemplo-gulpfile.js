var gulp = require('gulp'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    minifyCss = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync');


gulp.task('dependencies', function(){
  gulp.src('bower_components/normalize-css/normalize.css')
  .pipe(rename('_normalize.scss'))
  .pipe(gulp.dest('scss/libs'));
  gulp.src('bower_components/parsleyjs/dist/parsley.min.js')
  .pipe(gulp.dest('js/libs'));
});

gulp.task('clean', function() {
    del('dist/**/*');
});

gulp.task('sass', function() {
    gulp.src('scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
    	browsers: ['last 20 versions'],
    	cascade: false
     }))
    .pipe(gulp.dest('css/'))
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('js', function() {
    gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function(){
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('js/*.js', ['js']);
});

gulp.task('sync', function() {
    browserSync.init({
        server: ""
    });
    gulp.watch('scss/**/*.scss', ['sass']).on('change', browserSync.reload);
    gulp.watch('js/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch('index.html').on('change', browserSync.reload);
});

gulp.task('dist', function() {
  gulp.src(['index.html', 'all.min.js'])
  .pipe(gulp.dest('./dist/'));
  gulp.src('img/**/*.*')
  .pipe(gulp.dest('./dist/img/'));
  gulp.src('css/**/*.*')
  .pipe(gulp.dest('./dist/css/'));
  gulp.src('js/**/*')
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['clean', 'dependencies', 'js', 'sass'], function() {
  gulp.start('dist');
});
