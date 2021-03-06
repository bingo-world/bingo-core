[![Build Status](https://travis-ci.org/bingo-world/bingo-core.svg?branch=master)](https://travis-ci.org/bingo-world/bingo-core)
[![Coverage Status](https://coveralls.io/repos/github/bingo-world/bingo-core/badge.svg?branch=master)](https://coveralls.io/github/bingo-world/bingo-core?branch=master)

# bingo-core

## Usage

```js
var Game = require('bingo-core');
var game = new Game();

// get the next combination
game.nextCombination();

// check if there are still combinations available
game.areCombinationsAvailable();
```

## Versioning

After making a change, commit the change.
Then make a new version and push to github.

```shell
npm version patch
git push origin master
git push --tags
```

In projects with a dependency to bingo-core you can now update to the new version.

```shell
npm update bingo-core
```

## Commands

```shell
npm test
npm run test:watch
npm run coverage
```

