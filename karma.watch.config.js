var baseConfig = require('./karma.config.js');

module.exports = function(config) {
    baseConfig(config);
    config.set({
        singleRun: false,
        autoWatch: true,
        autoWatchBatchDelay: 300
    });
};