var RandomNumberGenerator = require('../src/randomNumberGenerator.js');
var chai = require('chai');
var expect = chai.expect;

describe('randomNumberGenerator', function () {
    describe('generate', function () {
        var randomNumberGenerator;
        beforeEach(function () {
            randomNumberGenerator = new RandomNumberGenerator();
        });

        it('given a randomNumberGenerator when the min and max value are equal then an error is thrown', function () {
            expect(function () { randomNumberGenerator.generate(3, 3); }).to.throw(Error, 'min and max can\'t be equal');
        });

        it('given a randomNumberGenerator when generate then the result within min and max', function () {
            var min = 0;
            var max = 10;
            for (var i = 0; i < 100; i++) {
                var result = randomNumberGenerator.generate(min, max);

                expect(result).to.be.within(min, max);
            }
        });

        it('given a randomNumberGenerator when generate without min then an error is thrown', function () {
            expect(randomNumberGenerator.generate).to.throw(Error, 'invalid min parameter provided');
        });

        it('given a randomNumberGenerator when generate without max then an error is thrown', function () {
            expect(function () { randomNumberGenerator.generate(3); }).to.throw(Error, 'invalid max parameter provided');
        });

        it('given a randomNumberGenerator when generate with invalid min then an error is thrown', function () {
            expect(function () { randomNumberGenerator.generate('a', 2); }).to.throw(Error, 'invalid min parameter provided');
        });

        it('given a randomNumberGenerator when generate with invalid max then an error is thrown', function () {
            expect(function () { randomNumberGenerator.generate(3, 'a'); }).to.throw(Error, 'invalid max parameter provided');
        });
    });
});