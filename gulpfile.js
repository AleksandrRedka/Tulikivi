"use strict";

const gulp    = require("gulp"),
  sass        = require("gulp-sass"),
  browserSync = require("browser-sync"),
  autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("assets/css/*.sass")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
    .pipe(gulp.dest("assets/css"))
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task("browser-sync", function() {
  browserSync({
    server: { baseDir: "index.html" },
    notify: false
  });
});

gulp.task("watch", function() {
  gulp.watch("assets/sass/*.sass", gulp.parallel("sass"));
  gulp.watch("*.html",browserSync.reload({ stream: true }));
});
gulp.task('default',gulp.parallel( "sass","browser-sync","watch"))
