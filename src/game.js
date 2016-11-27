(function () {
    'use strict';

    function Game() {
        var self = this;

        var RandomNumberGenerator = require('./randomNumberGenerator.js');
        var randomNumberGenerator = new RandomNumberGenerator();
        var State = require('./state.js');
        var state = new State();

        self.nextCombination = function () {
            var availableRanges = getAvailableRanges(state.ranges);
            if (availableRanges.length === 0) {
                throw new Error('All combinations are generated');
            }
            var index = getRandomIndex(randomNumberGenerator, availableRanges);
            var nextCombination = availableRanges[index].nextCombination();
            return nextCombination;
        };

        self.areCombinationsAvailable = function areCombinationsAvailable() {
            for (var i = 0; i < state.ranges.length; i++) {
                if (state.ranges[i].areNumbersAvailable()) {
                    return true;
                }
            }
            return false;
        };

        function getAvailableRanges(ranges) {
            return ranges.filter(function (range) {
                return range.areNumbersAvailable();
            });
        }

        function getRandomIndex(randomNumberGenerator, list) {
            if (list.length === 1) {
                return 0;
            } else {
                return randomNumberGenerator.generate(0, list.length - 1);
            }
        }
    }

    module.exports = Game;
})();