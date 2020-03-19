const mix = require('laravel-mix');

/* Allow multiple Laravel Mix applications*/
require('laravel-mix-merge-manifest');
mix.mergeManifest();
/*----------------------------------------*/

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

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/bootstrap.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
      output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
          resolve: {
              alias: {
                  vue$: 'vue/dist/vue.runtime.esm.js',
                  '@': path.resolve('resources/js'),
                  '~': path.resolve('Modules'),
              },
          },
      });
