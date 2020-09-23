var gulp = require('gulp');

var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();



gulp.task('sass', function () {
    return gulp.src("./app/scss/*.scss")
        .pipe(sass({
            includePaths: require('node-normalize-scss').includePaths
        }))
        .pipe(gulp.dest("./app/css"))
        .pipe(browserSync.stream());
});



gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('watch', gulp.series('browser-sync',
    'sass',
    function () {
        gulp.watch('./app/scss/**/*scss', ['sass']);
        gulp.watch("app/*.html").on("change", reload);
    }));
