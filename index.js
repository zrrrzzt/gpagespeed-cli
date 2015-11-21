#!/usr/bin/env node
'use strict'

var pagespeed = require('gpagespeed')
var getHelpText = require('./lib/getHelpText')
var pkg = require('./package.json')
var query = process.argv[2]
var argv = require('minimist')((process.argv.slice(2)))
var opts = {}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  console.log(getHelpText())
  process.exit(0)
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

if (query.indexOf('http') !== -1) {
  opts.url = argv._[0]
}

if (!opts.url || (!argv.key && !argv.nokey)) {
  console.log(getHelpText())
  process.exit(0)
}

if (argv.url) {
  opts.url = argv.url
}

if (argv.key) {
  opts.key = argv.key
}

if (argv.callback) {
  opts.callback = argv.callback
}

if (argv.prettyprint) {
  opts.prettyprint = argv.prettyprint
}

if (argv.userIp) {
  opts.userIp = argv.userIp
}

if (argv.filter_third_party_resources) {
  opts.filter_third_party_resources = true
}

if (argv.rule) {
  opts.rule = argv.rule
}

if (argv.screenshot) {
  opts.screenshot = true
}

if (argv.locale) {
  opts.locale = argv.locale
}

if (argv.strategy) {
  opts.strategy = argv.strategy
}

if (argv.nokey) {
  opts.nokey = argv.nokey
}

if (argv.useweb) {
  opts.useweb = argv.useweb
}

if (argv.apiversion) {
  opts.apiversion = argv.apiversion
}

pagespeed(opts, function (error, data) {
  if (error) {
    console.error(error)
    process.exit(1)
  } else {
    console.log(JSON.stringify(data))
  }
})
