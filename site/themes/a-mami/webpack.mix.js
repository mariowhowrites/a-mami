let mix = require('laravel-mix');

mix.js(['src/js/a-mami.js', 'src/js/util.js'], 'js');

mix.sass('src/scss/a-mami.scss', 'css');