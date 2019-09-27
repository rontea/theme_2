# Theme Template

Theme template using panini to divide and sub-divide each html document to a more clean coding.
This is define on gulp.js.

## Requirements:

- node
- npm install gulp-cli -g
- npm init
  - npm install --save-dev gulp gulp-postcss gulp-sass gulp-sourcemaps gulp-uglify gulp-environments autoprefixer cssnano browser-sync jquery popper bootstrap tether panini rimraf gulp-html

  ```
  $npm install gulp-cli -g
  $npm init
  $npm install --save-dev gulp gulp-postcss gulp-sass gulp-sourcemaps gulp-uglify gulp-environments autoprefixer cssnano browser-sync jquery popper bootstrap tether panini rimraf gulp-html
  ```
## Adding Vue.js and Bulma CSS

##### bulma additional installation
```
  $npm install --save-dev bulma
```

## Gulp Tasks

- default
- clean : clean the /build/* directory
- js-compile
- compile-js
- compile-bootstrap
- compile-bulma
- compile-scss
- compile-html
- compile-img
- compile-nobs
- watch

## Using gulp-enviroments

- gulp task --env development : do not minify js , css and other
    ```
    $gulp 'task' --env development
    ```
- gulp task --env production :  minify js , css and other

    ```
    $gulp 'task' --env production
    ```
## Deployment

The compiled version of the codes is available under ./build

##### gulp default task
The data will be compiled on build folder

```
$gulp 'task' --env development
```

##### Clean the build folder

```
$gulp clean
```

## Version

Version 0.0.0

## Change log

Update 9.27 
- Update src/style.scss to have an option to add bulma, bootstrap and google font
- Added gulp task compile-bulma

Add the following to import individual component of each framework
```
@import "google/google_font";
@import "bootstrap/bootstrap";
@import "bulma/bulma";
```

## Gulp Tasks Update
- compile-nobs : Compile without Compiling Bootstrap
- compile-bulma
  - *note that bulma and bootstrap do not work if imported in scss at the same time

- compile-img : no image minify yet

## Upcoming

- Minify Image
- Create Dist
- Guide Templateting
- Adding AngularJS
- Adding Dist folder

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

## Other

- Readme.md Guide Template [Readme.md](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
- Readme.md Format [https://guides.github.com/features/mastering-markdown/](https://guides.github.com/features/mastering-markdown/)
