# bingo-core

## Commands

```shell
npm test
npm run test:watch
npm run lint
```

## Usage

```js
var Game = require('bingo-core');
var game = new Game();

// get the next combination
game.nextCombination();

// check if there are still combinations available
game.areCombinationsAvailable();
```