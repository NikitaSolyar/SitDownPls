const {src, dest, series, watch, parallel} = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const compileSass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const image = require('gulp-image');
const svgSprite = require('gulp-svg-sprite');
const webp = require ('gulp-webp');
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const fileInclude = require('gulp-file-include');
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const browserSync = require('browser-sync').create();

const clean = () => {
  return del(['dist'])
}

const resources = () => {
  return src('src/resources/**')
  .pipe(dest('dist'))
}

const stylesBuild = () => {
  return src('src/styles/**/*.scss')
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const styles = () => {
  return src('src/styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(compileSass().on('error', compileSass.logError))
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
      cascade: false,
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const copyingPluginsCss = () => {
  const modules = [
    'node_modules/swiper/swiper-bundle.min.css',
    'src/styles/vendor/*.css'
  ];

  return src(modules)
    .pipe(dest('dist/plugins/css'));

}

const htmlMinifyBuild = () => {
  return src('src/**/*.html')
    .pipe(htmlMin({
      collapseWhitespace: true,
    }))
    .pipe(fileInclude({
      prefix: '@',
      basepath: '@file'
    }))
    .pipe(dest('dist'))
    .pipe(browserSync.stream())
}

const htmlMinify = () => {
  return src('src/**/*.html')
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const fonts = () => {
  return src('src/fonts/**')
    .pipe(dest('dist/fonts'))
}

const svgSprites = () => {
  return src('src/images/svg/**/*.svg')
  .pipe(svgSprite({
    mode: {
      stack: {
        sprite: '../sprite.svg'
      }
    }
  }))
  .pipe(dest('dist/images'))
}

const images = () => {
  src('./src/images/favicons/')
		.pipe(dest('./dist/images/favicons'))
  return src([
      'src/images/**/*.jpg',
      'src/images/**/*.jpeg',
      'src/images/**/*.png',
      'src/images/*.svg'
    ])
    .pipe(image())
    .pipe(dest('dist/images'))
}

const webpImages = () => {
  return src([
    'src/images/**/*.jpg',
    'src/images/**/*.jpeg',
    'src/images/**/*.png'
  ])
    .pipe(webp())
    .pipe(dest('dist/images'))
};

const scriptsBuild = () => {
  return src([
    'src/js/components/**/*.js',
    'src/js/main.js',
  ])
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(concat('app.js'))
  .pipe(uglify({
    toplevel: true
  }).on('error', notify.onError()))
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const scripts = () => {
  return src([
    'src/js/components/**/*.js',
    'src/js/main.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('app.js'))
  .pipe(sourcemaps.write())
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const scriptVendor = () => {
  return src([
    'src/js/vendor/*.js',
  ])
  .pipe(sourcemaps.init())
  .pipe(concat('vendor.js'))
  .pipe(sourcemaps.write())
  .pipe(dest('dist'))
  .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}


watch('src/**/*.html', htmlMinify)
watch('src/styles/**/*.scss', styles)
watch('src/images/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/fonts/**', fonts);
watch('src/resources/**', resources)

exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.default = series(clean, resources, htmlMinify, fonts, scripts, styles, copyingPluginsCss, scriptVendor, images, webpImages, svgSprites, watchFiles)
exports.build = parallel(clean, resources, htmlMinifyBuild, scriptsBuild, stylesBuild, copyingPluginsCss, scriptVendor, svgSprites, webpImages)
