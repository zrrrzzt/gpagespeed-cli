#!/usr/bin/env node

var pagespeed = require('gpagespeed')
var getHelpText = require('./lib/getHelpText')
var pkg = require('./package.json')
var query = process.argv[2]
var argv = require('minimist')((process.argv.slice(2)))
var options = {}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

if (query.indexOf('http') !== -1) {
  options.url = argv._[0]
}

if (argv.url) {
  options.url = argv.url
}

if (argv.key) {
  options.key = argv.key
} else {
  options.nokey = true
}

if (argv.filter_third_party_resources) {
  options.filter_third_party_resources = true
}

if (argv.rule) {
  options.rule = argv.rule
}

if (argv.screenshot) {
  options.screenshot = true
}

if (argv.locale) {
  options.locale = argv.locale
}

if (argv.strategy) {
  options.strategy = argv.strategy
}

if (argv.dryrun) {
  console.log(JSON.stringify(options))
  process.exit(0)
}

pagespeed(options)
  .then(data => {
    console.log(JSON.stringify(data))
  }).catch(error => {
    console.error(error)
    process.exit(1)
  })
