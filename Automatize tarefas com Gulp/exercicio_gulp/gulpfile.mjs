import gulp from "gulp";
import gulpSass from "gulp-sass";
import dartSass from "sass";
import imagemin from "gulp-imagemin";
import uglify from "gulp-uglify";
import rename from "gulp-rename";
import cleanCSS from "gulp-clean-css";

const sass = gulpSass(dartSass);

const paths = {
  sass: {
    src: "./src/sass/**/*.scss",
    dest: "./dist/css",
  },
  images: {
    src: "./images/**/*.{jpg,jpeg,png,gif,svg}",
    dest: "./dist/images",
  },
  js: {
    src: "./src/js/**/*.js",
    dest: "./dist/js",
  },
};

function compilaSass() {
  return gulp
    .src(paths.sass.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.sass.dest));
}

function comprimeImagens() {
  return gulp
    .src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

function minificaJs() {
  return gulp
    .src(paths.js.src)
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.js.dest));
}

const build = gulp.series(compilaSass, comprimeImagens, minificaJs);

export { compilaSass as sass, comprimeImagens as imagens, minificaJs as js };
export default build;
