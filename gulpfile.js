'use strict';

let gulp = require('gulp'),
    packageJson = require('./package.json'),
    plugins = require('gulp-load-plugins')({
        pattern: [
            'gulp-*',
            'gulp.*',
            'del',
            'electron-connect'
        ],
        lazy: true
    });

require('require-directory')(module, './gulp', {
        visit: task => {
        task(gulp, plugins, packageJson)
    }
});