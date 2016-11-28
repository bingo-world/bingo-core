var Range = require('../src/range.js');
var chai = require('chai');
var expect = chai.expect;

describe('range', function () {
    describe('constructor', function () {
        it('given an invalid prefix when creating a range then an error is thrown', function () {
            expect(function () { new Range(); }).to.throw(Error, 'invalid prefix');
        });

        it('given an invalid from when creating a range then an error is thrown', function () {
            expect(function () { new Range('A', 'A'); }).to.throw(Error, 'invalid from');
            expect(function () { new Range('A', -1); }).to.throw(Error, 'invalid from');
        });

        it('given an invalid to when creating a range then an error is thrown', function () {
            expect(function () { new Range('A', 0, 'A'); }).to.throw(Error, 'invalid to');
            expect(function () { new Range('A', 0, -1); }).to.throw(Error, 'invalid to');
        });

        it('given a from greater than a to when creating a range then an error is thrown', function () {
            expect(function () { new Range('A', 5, 2); }).to.throw(Error, 'from greater than to');
        });

        it('given a from equal to a to when creating a range then a range is created', function () {
            expect(new Range('A', 2, 2)).to.exist;
        });
    });

    describe('properties', function () {
        it('given a prefix, from and to when creating a range then the properties are set', function () {
            var prefix = 'X';
            var from = 1;
            var to = 3;

            var range = new Range(prefix, from, to);

            expect(range.prefix).to.equal(prefix);
            expect(range.from).to.equal(from);
            expect(range.to).to.equal(to);
        });

        it('given a range when setting the properties then the properties are not changed', function () {
            var prefix = 'X';
            var from = 1;
            var to = 3;

            var range = new Range(prefix, from, to);

            range.prefix = 'Y';
            range.from = 2;
            range.to = 5;

            expect(range.prefix).to.equal(prefix);
            expect(range.from).to.equal(from);
            expect(range.to).to.equal(to);
        });
    });

    describe('nextCombination', function () {
        var prefix = 'A';
        var allRangeValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var range;

        beforeEach(function () {
            range = new Range(prefix, allRangeValues[0], allRangeValues[allRangeValues.length - 1]);
        });

        it('given a range when calling nextCombination then a number from the range with prefix should be returned', function () {
            var number = range.nextCombination();

            expect(number.prefix).to.equal(prefix);
            expect(number.value).to.be.oneOf(allRangeValues);
        });

        it('given a range of length n when calling nextCombination n times then each number from the range with prefix should be returned', function () {
            var numbers = [];
            for (var i = 0; i < allRangeValues.length; i++) {
                numbers.push(range.nextCombination());
            }

            expect(numbers.length).to.equal(allRangeValues.length);
            numbers.forEach(function (number) {
                expect(number.prefix).to.equal(prefix);
                expect(number.value).to.be.oneOf(allRangeValues);
            });
        });

        it('given a range of length n when calling nextCombination n + 1 times then an error is thrown', function () {
            for (var i = 0; i < allRangeValues.length; i++) {
                range.nextCombination();
            }

            expect(range.nextCombination).to.throw(Error, 'All numbers are generated');
        });
    });

    describe('areNumbersAvailable', function () {
        var prefix = 'A';
        var allRangeValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var range;

        beforeEach(function () {
            range = new Range(prefix, allRangeValues[0], allRangeValues[allRangeValues.length - 1]);
        });

        it('given a range when no numbers are generated then areNumbersAvailable returns true', function () {
            expect(range.areNumbersAvailable()).to.equal(true);
        });

        it('given a range when some but not all numbers are generated then areNumbersAvailable returns true', function () {
            for (var i = 0; i < allRangeValues.length - 1; i++) {
                range.nextCombination();
            }
            expect(range.areNumbersAvailable()).to.equal(true);
        });

        it('given a range when all numbers are generated then areNumbersAvailable returns false', function () {
            for (var i = 0; i < allRangeValues.length; i++) {
                range.nextCombination();
            }
            expect(range.areNumbersAvailable()).to.equal(false);
        });
    });
});