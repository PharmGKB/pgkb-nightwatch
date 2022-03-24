# pgkb-nightwatch

This has been forked from [learn-nightwatch](https://github.com/dwyl/learn-nightwatch).

## Setup

```shell
$> npm i
```

In the `.env` file set the path you would like screenshots saved to

```shell
SCREENSHOT_PATH=screenshots
```

You should also set the following for your email and password if you plan to test on beta or on a local instance

```shell
PGKB_USER=[your email]
PGKB_PASS=[your password]
```

## Running

To run all tests on www:

```shell
$> npm test
```

To run a single test (gene_test, for example):

```shell
$> npm run test -- ./test/pharmgkb/gene_test.js
```

To run all tests against local:

```shell
$> npm run test-local
```

To run a single test against local (gene_test):

```shell
$> npm run test-local -- ./test/pharmgkb/gene_test.js
```
