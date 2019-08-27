# Theme Template

###### Requirements:

- node
- npm install gulp-cli -g
- npm init
  - npm install --save-dev gulp gulp-postcss gulp-sass gulp-sourcemaps gulp-uglify gulp-environments autoprefixer cssnano browser-sync jquery popper bootstrap tether panini rimraf gulp-html

## Gulp Tasks

- default
- clean : clean the /build/* directory
- js-compile
- compile-js
- compile-bootstrap
- compile-scss
- compile-html
- compile-img
- compile-nobs
- watch

##### Using gulp-enviroments

- gulp task --env development : do not minify js , css and other
- gulp task --env production :  minify js , css and other

#####
 - Usage : gulp default --env development / gulp default --env production


## Gulp Tasks Update
- compile-nobs : Compile without Compiling Bootstrap
- compile-img : no image minigy yet

##### gulp default task
The data will be compiled on build folder, to clean the build folder run clean task



## Upcoming

- Minify Image
- Guide Templateting

## Link to Coding Standards

- https://en.bem.info/methodology/
- https://google.github.io/styleguide/htmlcssguide.html#HTML_Formatting_Rules
- https://github.com/xfiveco/html-coding-standards/blob/master/README.md
- https://cssguidelin.es/#the-importance-of-a-styleguide
- https://github.com/necolas/idiomatic-css#general-principles

## Resources

- [jQuery](https://jquery.com)
- [Bootstrap](https://getbootstrap.com/)
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [gulp](https://gulpjs.com/)
- [panini](https://foundation.zurb.com/sites/docs/panini.html)
  - [Playlist](https://www.youtube.com/playlist?list=PLJVWPVPk_D_3A4OBvLtsrcjL7gs1QEWLW)
