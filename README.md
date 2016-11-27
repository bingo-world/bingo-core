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
```

In projects with a dependency to bingo-core you can now update to the new version.

```shell
npm update bingo-core
```

## Commands

```shell
npm test
npm run test:watch
npm run lint
```

