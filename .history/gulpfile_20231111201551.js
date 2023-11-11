const gulp = require("gulp");
const sync = require("browser-sync").create();
const rename = require("gulp-rename");
const del = require("del");
const htmlmin = require("gulp-htmlmin");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const jsmin = require("gulp-terser");
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");
const pngquant = require("imagemin-pngquant");
const svgo = require("imagemin-svgo");
const svgmin = require("gulp-svgmin");
const svgstore = require("gulp-svgstore");
const webp = require("gulp-webp");

const { src, dest, series, parallel, watch } = gulp;

// HTML

const html = () => {
  return src("source/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('build'))
};

// Styles

const styles = () => {
  return src("source/css/style.css")
    .pipe(postcss([
      autoprefixer(),
      csso()
    ]))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"))
    .pipe(sync.stream());
};

exports.styles = styles;

// JavaScript

const scripts = () => {
  return gulp.src("source/js/*.js")
    .pipe(jsmin())
    .pipe(gulp.dest("build/js"))
    .pipe(sync.stream())
};

exports.scripts = scripts;

// Images


const optimizeImages = () => {
  return gulp.src("source/img/**/*.{svg,png,jpeg}")
    .pipe(imagemin([
      mozjpeg({progressive: true}),
      pngquant(),
      svgo()
    ]))
    .pipe(gulp.dest("build/img"));
}

exports.optimizeImages = optimizeImages;

// Clean

const clean = () => {
  return del("build");
};

// copy images

const copyImages = () => {
  return gulp.src("source/img/**/*.{svg,png,jpg}")
    .pipe(gulp.dest("build/img"))
}

exports.copyImages = copyImages;

// Webp

const webpImages = () => {
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("build/img"))
}

exports.webpImages = webpImages;

// Sprite

const sprite = () => {
  return gulp.src("source/img/icons/*.svg")
    .pipe(svgmin())
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"))
}

exports.sprite = sprite;

// Copy

const copy = (done) => {
  return gulp.src([
    "source/fonts/*.{woff,woff2}",
    "source/css/normalize.css",
    "source/*.ico",
    "source/*.webmanifest",
    "source/img/**/*.svg",
    "!source/img/icons/*.svg",
  ],{
    base: "source"
  })
  .pipe(gulp.dest("build"))
  done();
}

exports.copy = copy;

// Server

const server = (done) => {
  sync.init({
    server: {
      baseDir: "build"
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
}

exports.server = server;

// Reload

const reload = (done) => {
  sync.reload();
  done()
}

// Watcher

const watcher = () => {
  gulp.watch("source/css/**/*.css", gulp.series(styles));
  gulp.watch("source/*.html", gulp.series(html, reload));
  gulp.watch("source/js/*.js", gulp.series(scripts));
}

// Build

const build = gulp.series(
  clean,
  copy,
  optimizeImages,
  gulp.parallel(
    html,
    styles,
    sprite,
    webpImages,
    scripts
  ),
);

exports.build = build;

// Default

exports.default = gulp.series(
  clean,
  copy,
  copyImages,
  gulp.parallel(
    html,
    styles,
    sprite,
    webpImages,
    scripts
  ),
  gulp.series(
    server,
    watcher,
  )
);
