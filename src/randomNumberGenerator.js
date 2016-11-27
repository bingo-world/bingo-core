(function () {
    'use strict';

    function RandomNumberGenerator() {
        this.generate = function generate(min, max) {
            if (isNaN(min)) {
                throw new Error('invalid min parameter provided');
            }

            if (isNaN(max)) {
                throw new Error('invalid max parameter provided');
            }

            if (min === max) {
                throw new Error('min and max can\'t be equal');
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    }

    module.exports = RandomNumberGenerator;
})();