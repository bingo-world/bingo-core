(function () {
    'use strict';

    function State() {
        var self = this;
        self.generatedCombinationAddedEventHandlers = [];

        var Range = require('./range.js');

        self.alreadyGeneratedCombinations = {
            'B': [],
            'I': [],
            'N': [],
            'G': [],
            'O': []
        };

        self.ranges = [
            new Range('B', 1, 15),
            new Range('I', 16, 30),
            new Range('N', 31, 45),
            new Range('G', 46, 60),
            new Range('O', 61, 75)
        ];

        self.addGeneratedCombination = function (prefix, value) {
            //TODO: Do some testing to make sure prefix, number is within range and tr
            self.alreadyGeneratedCombinations[prefix].push(value);
            self.handleGeneratedCombinationAdded(prefix, value);
        };


        self.addGeneratedCombinationAddedEventHandler = function (eventHandler) {
            self.generatedCombinationAddedEventHandlers.push(eventHandler);
        };

        self.handleGeneratedCombinationAdded = function (prefix, value) {
            if (self.generatedCombinationAddedEventHandlers.length > 0) {
                self.generatedCombinationAddedEventHandlers.forEach(function (element) {
                    element(prefix, value);
                }, this);
            }
        };
    }

    module.exports = State;
})();