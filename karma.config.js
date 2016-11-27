module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['PhantomJS'],
        files: ['./test/*.test.js'],
        preprocessors: { './test/*.test.js': ['webpack'] },
        webpack: {},
        webpackMiddleware: { noInfo: true },
        plugins: [
            require('karma-webpack'),
            require('karma-mocha'),
            require('karma-chai'),           
            require('karma-sinon'),
            require('karma-phantomjs-launcher')
        ],
        autoWatch: false,
        singleRun: true,
        concurrency: Infinity
    });
};