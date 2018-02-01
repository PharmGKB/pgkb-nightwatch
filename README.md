# pgkb-nightwatch

This has been forked from [learn-nightwatch](https://github.com/dwyl/learn-nightwatch).

## Setup

```
$> touch .env
$> npm i
```

## Running

To run all tests:

```
$> npm test
```

To run a single test (gene_test, for example):

```
$> node_modules/.bin/nightwatch -e local test/pharmgkb/gene_test.js
```
