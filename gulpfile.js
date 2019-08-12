var gulp = require("gulp"),
    // gulp-sass
    sass = require("gulp-sass"),
    // gulp-postcss
    postcss = require("gulp-postcss"),
    //autoprefixer
    autoprefixer = require("autoprefixer"),
    //cssnano
    cssnano = require("cssnano"),
    // gulp-sourcemaps
    sourcemaps = require("gulp-sourcemaps"),
    //browser-sync
    browserSync = require("browser-sync").create(),
    // gulp-enviroments
    environments = require('gulp-environments'),
    // gulp-uglify
    uglify = require('gulp-uglify'),
    // panini
    panini = require('panini');

// main directory

var main = "./";

/*
enviroments
*/

var development = environments.development;
var production = environments.production;


/* JS paths*/
var jspaths = {

    bootstrap: "node_modules/bootstrap/dist/js/bootstrap.min.js",

    popper : "node_modules/popper.js/dist/popper.min.js",

    tether: "node_modules/tether/dist/js/tether.min.js",

    jquery: "node_modules/jquery/dist/jquery.min.js",

};

/* JS Destination */
var jsdes = "src/js/inc";

// gulp information
gulp.task('hello', function() {
  console.log('========================');
  console.log('Gulp File RR Version v1.0.0');
  console.log('========================');
});

// Erases the dist folder
gulp.task('clean', function() {
  rimraf(main);
});

/*
JS to complile
*/

gulp.task ('compile-js', function () {
  return gulp
    // js paths source
    .src([jspaths.bootstrap, jspaths.popper, jspaths.tether, jspaths.jquery])
    // write to destination
    .pipe(gulp.dest(jsdes))
    .pipe(browserSync.stream());
});


var paths = {
    bootstrap: {

      src: "node_modules/bootstrap/scss/bootstrap.scss/*.scss",

      dest: "src/css/inc/bootstrap"
    },

    styles: {

      src: "src/scss/*.scss",

      dest: "src/css"

    }
};
/*
bootstrap to complie
*/

gulp.task('compile-bootstrap', function (){
  return gulp
    .src(paths.bootstrap.src)
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest(paths.bootstrap.dest))
    .pipe(browserSync.stream());
});


/*
Sass to compile
*/

function compileSass() {
  return gulp
    // sass location
    .src(paths.styles.src)
    //sourcemaps
    .pipe(development(sourcemaps.init()))
    //sass error log
    .pipe(sass().on('error', sass.logError))
    // Use postcss with autoprefixer and compress the compiled file using cssnano
    .pipe(postcss([autoprefixer(), cssnano()]))
    // Now add/write the sourcemaps
    .pipe(development(sourcemaps.write()))
    // sass destination
    .pipe(gulp.dest(paths.styles.dest))
    // Add browsersync stream pipe after compilation
    .pipe(browserSync.stream());
};

var pages = {

    src : "pages/**/*.html",

    desc: "build"
};

/*
panini tasks
*/

function compilePanini() {
  return gulp
    .src(pages.src)
    .pipe(panini({
      root: 'pages/',
      layouts: 'layouts/',
      partials: 'partials/',
      helpers: 'helpers/',
      data: 'data/'
    }))
    .pipe(gulp.dest(pages.desc));
};

/* Watch */

// A simple task to reload the page
function reload() {
    browserSync.reload();
};

// Add browsersync initialization at the start of the watch task
gulp.task('watch', function () {
    browserSync.init({
        // You can tell browserSync to use this directory and serve it as a mini-server
        server: {
            baseDir: "./build"
        }
        // If you are already serving your website locally using something like apache
        // You can use the proxy setting to proxy that instead
        // proxy: "yourlocal.dev"
    });
    gulp.watch(paths.styles.src, compileSass);

    // panini
    gulp.watch(['./src/{layouts,partials,helpers,data}/**/*'], compilePanini);

    // We should tell gulp which files to watch to trigger the reload
    // This can be html or whatever you're using to develop your website
    // Note -- you can obviously add the path to the Paths object
    gulp.watch("./*.html", reload);
});
