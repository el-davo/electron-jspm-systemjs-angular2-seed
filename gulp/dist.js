'use strict';

module.exports = (gulp, $, packageJson) => {

    gulp.task(dist);

    function dist() {
        return gulp.src('app/**')
            .pipe($.atomElectron({version: '0.34.1', platform: 'win32'}))
            .pipe($.vinylZip.dest(`dist/${packageJson.name}-${packageJson.version}.zip`));
    }
};