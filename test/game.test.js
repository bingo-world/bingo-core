var Game = require('../src/game.js');
var chai = require('chai');
var expect = chai.expect;

describe('game', function () {
    var max = 75;

    describe('nextCombination', function () {
        var allRangePrefixes = ['B', 'I', 'N', 'G', 'O'];
        var min = 1;
        var game;

        beforeEach(function () {
            game = new Game();
        });

        it('given a game when calling nextCombination then a number from a range should be returned', function () {
            var number = game.nextCombination();

            expect(number.prefix).to.be.oneOf(allRangePrefixes);
            expect(number.value).to.be.within(min, max);
        });

        it('given a game of length n when calling nextCombination n times then each number from the game with prefix should be returned', function () {
            var numbers = [];
            for (var i = 0; i < max; i++) {
                numbers.push(game.nextCombination());
            }

            expect(numbers.length).to.equal(max);
            numbers.forEach(function (number) {
                expect(number.prefix).to.be.oneOf(allRangePrefixes);
                expect(number.value).to.be.within(min, max);
            });
        });

        it('given a game of length n when calling nextCombination n + 1 times then an error is thrown', function () {
            for (var i = 0; i < max; i++) {
                game.nextCombination();
            }

            expect(game.nextCombination).to.throw(Error, 'All combinations are generated');
        });
    });

    describe('areNumbersAvailable', function () {
        var game;

        beforeEach(function () {
            game = new Game();
        });

        it('given a game when no combinations are generated then areCombinationsAvailable returns true', function () {
            expect(game.areCombinationsAvailable()).to.equal(true);
        });

        it('given a game when some but not all combinations are generated then areCombinationsAvailable returns true', function () {
            for (var i = 0; i < max - 1; i++) {
                game.nextCombination();
            }
            expect(game.areCombinationsAvailable()).to.equal(true);
        });

        it('given a game when all combinations are generated then areCombinationsAvailable returns false', function () {
            for (var i = 0; i < max; i++) {
                game.nextCombination();
            }
            expect(game.areCombinationsAvailable()).to.equal(false);
        });
    });
});