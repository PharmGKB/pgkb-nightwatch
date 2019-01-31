# pgkb-nightwatch

This has been forked from [learn-nightwatch](https://github.com/dwyl/learn-nightwatch).

## Setup

```
$> touch .env
$> npm i
```

In the `.env` file set the path you would like screenshots saved to

```
export SCREENSHOT_PATH=screenshots
``` 

## Running

To run all tests on www:

```
$> npm test
```

To run a single test (gene_test, for example):

```
$> npm run test -- ./test/pharmgkb/gene_test.js
```

To run all tests against local:

```
$> npm run test-local
```

To run a single test against local (gene_test):

```
$> npm run test-local -- ./test/pharmgkb/gene_test.js
```
