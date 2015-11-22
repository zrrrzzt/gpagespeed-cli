[![Build Status](https://travis-ci.org/zrrrzzt/gpagespeed-cli.svg?branch=master)](https://travis-ci.org/zrrrzzt/gpagespeed-cli)
[![Coverage Status](https://coveralls.io/repos/zrrrzzt/gpagespeed-cli/badge.svg?branch=master&service=github)](https://coveralls.io/github/zrrrzzt/gpagespeed-cli?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
# gpagespeed-cli

Node CLI app for analyzing a webpage with [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/).

This CLI will function for occasional testing without a key using the free tier. 
It is however recommended to acquire an API key from [Google Developers Console](https://console.developers.google.com/).

## Installation

From npm

```sh
$ npm install gpagespeed-cli -g
```

From GitHub

```sh
$ git clone git@github.com:zrrrzzt/gpagespeed-cli.git
```

Run setup

```sh
$ npm run setup
```

## Usage - CLI

```sh
$ gpagespeed <url>
```

Optional params are supplied by ```--paramname=<param value>```

```sh
$ gpagespeed <url> --key=<key value>
```

You can see a list of all alternatives on the page for [Google PageSpeed standard query parameters](https://developers.google.com/speed/docs/insights/v2/reference/pagespeedapi/runpagespeed).

```sh
$ gpagespeed <url> --key=<key> filter_third_party_resources=<boolean> --locale=<locale> --rule=<rule> --screenshot=<boolean> --strategy=<desktop|mobile>
```

To prettyprint the result I'll recommend [json](https://www.npmjs.com/package/json)

```sh
$ gpagespeed <url> | json
```

## Related
- [gpagespeed](https://github.com/zrrrzzt/gpagespeed) The API for this module

## Alternatives
- [psi](https://github.com/addyosmani/psi) If you prefer your PageSpeed reports nicely formatted

## License
[MIT](LICENSE)