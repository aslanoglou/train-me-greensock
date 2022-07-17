let mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.copyDirectory('src/images', 'dist/images');
mix.copyDirectory('src/fonts', 'dist/fonts');
mix.js('src/js/main.js', 'dist/js/main.js');
mix.js('src/js/home-page.js', 'dist/js/home-page.js');
mix.js('src/js/workout-page.js', 'dist/js/workout-page.js');
mix.js('src/js/application-page.js', 'dist/js/application-page.js');
mix.js('src/js/gear-page.js', 'dist/js/gear-page.js');
mix.js('src/js/form-validation.js', 'dist/js/form-validation.js');

mix.sass('src/scss/main.scss', 'dist/css/main.css')
    .options({
            processCssUrls: false
        }
    );
