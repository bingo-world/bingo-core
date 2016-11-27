(function () {
    'use strict';

    function Range(prefix, from, to) {
        var self = this;

        if (!prefix) {
            throw new Error('invalid prefix');
        }

        if (isNaN(from) || from < 0) {
            throw new Error('invalid from');
        }

        if (isNaN(to) || to < 0) {
            throw new Error('invalid to');
        }

        if (from > to) {
            throw new Error('from greater than to');
        }

        Object.defineProperty(self, 'prefix', {
            value: prefix,
            writable: false
        });
        Object.defineProperty(self, 'from', {
            value: from,
            writable: false
        });
        Object.defineProperty(self, 'to', {
            value: to,
            writable: false
        });

        var remainingNumbers = initRemainingNumbers(self.from, self.to);

        var RandomNumberGenerator = require('./randomNumberGenerator.js');
        var randomNumberGenerator = new RandomNumberGenerator();

        self.nextCombination = function nextCombination() {
            if (remainingNumbers.length === 0) {
                throw new Error('All numbers are generated');
            }
            var index = getRandomIndex(randomNumberGenerator, remainingNumbers);
            var nextNumber = remainingNumbers.splice(index, 1)[0];
            return { prefix: self.prefix, value: nextNumber };
        };

        self.areNumbersAvailable = function areNumbersAvailable() {
            return remainingNumbers.length > 0;
        };

        function initRemainingNumbers(from, to) {
            var numbers = [];
            for (var i = from; i <= to; i++) {
                numbers.push(i);
            }
            return numbers;
        }

        function getRandomIndex(randomNumberGenerator, list) {
            if (list.length === 1) {
                return 0;
            } else {
                return randomNumberGenerator.generate(0, list.length - 1);
            }
        }
    }

    module.exports = Range;
})();