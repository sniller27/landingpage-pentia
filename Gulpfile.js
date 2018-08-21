const gulp         = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['src/styles/scss/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("src/styles/css"))
        .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task('serve', function () {
    
    browserSync.init({
        server: "./"  
    });

    gulp.watch('src/styles/scss/*.scss', ['sass']);
    // gulp.watch(['./*.php','./*.js', './css/*.css', './sass/*.scss'], ['sass']);
    gulp.watch("digital-transformation.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);
