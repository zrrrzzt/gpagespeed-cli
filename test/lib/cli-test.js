'use strict'

var exec = require('child_process').execFile
var tap = require('tap')
var getHelpText = require('../../lib/getHelpText')
var pkgVersion = require('../../package.json').version

tap.test('It returns helptext with -h flag', function helpTextWithH (test) {
  exec('./index.js', ['-h'], function getHelpTextWithH (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns helptext with --help flag', function helpTextWithHelp (test) {
  exec('./index.js', ['--help'], function getHelpTextWithHelp (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), getHelpText().toString().trim())
      test.end()
    }
  })
})

tap.test('It returns version with -v flag', function versionWithV (test) {
  exec('./index.js', ['-v'], function getVersionWithV (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns version with --version flag', function versionWithVersion (test) {
  exec('./index.js', ['--version'], function getVersionWithVersion (error, stdout, stderr) {
    if (error) {
      console.error(stderr.toString())
      throw error
    } else {
      test.equal(stdout.toString().trim(), pkgVersion)
      test.end()
    }
  })
})

tap.test('It returns helptext if nothing is supplied', function testError (test) {
  exec('./index.js', [''], function testWithEmpty (error, stdout, stderr) {
    if (error) {
      throw error
    }
    test.equal(stdout.toString().trim(), getHelpText().toString().trim())
    test.end()
  })
})

tap.test('It returns helptext if nothing is supplied', function testError (test) {
  exec('./index.js', [''], function testWithEmpty (error, stdout, stderr) {
    if (error) {
      throw error
    }
    test.equal(stdout.toString().trim(), getHelpText().toString().trim())
    test.end()
  })
})

tap.test('It sets strategy if supplied', function testStrategy (test) {
  exec('./index.js', ['http://www.google.com', '--strategy=mobile', '--dryrun=true'], function testWithStrategy (error, stdout, stderr) {
    if (error) {
      throw error
    }
    var options = JSON.parse(stdout.toString().trim())
    test.equal(options.strategy, 'mobile')
    test.end()
  })
})

tap.test('It sets locale if supplied', function testLocal (test) {
  exec('./index.js', ['http://www.google.com', '--locale=no', '--dryrun=true'], function testWithLocale (error, stdout, stderr) {
    if (error) {
      throw error
    }
    var options = JSON.parse(stdout.toString().trim())
    test.equal(options.locale, 'no')
    test.end()
  })
})

tap.test('It sets screenshot if supplied', function testScreenshot (test) {
  exec('./index.js', ['http://www.google.com', '--screenshot=true', '--dryrun=true'], function testWithScreenshot (error, stdout, stderr) {
    if (error) {
      throw error
    }
    var options = JSON.parse(stdout.toString().trim())
    test.equal(options.screenshot, true)
    test.end()
  })
})

tap.test('It sets filter_third_party_resources if supplied', function testThirdPartyResources (test) {
  exec('./index.js', ['http://www.google.com', '--filter_third_party_resources=true', '--dryrun=true'], function testWithThirdPartyResources (error, stdout, stderr) {
    if (error) {
      throw error
    }
    var options = JSON.parse(stdout.toString().trim())
    test.equal(options.filter_third_party_resources, true)
    test.end()
  })
})

tap.test('It sets rule if supplied', function testRule (test) {
  exec('./index.js', ['http://www.google.com', '--rule=goodrule', '--dryrun=true'], function testWithRule (error, stdout, stderr) {
    if (error) {
      throw error
    }
    var options = JSON.parse(stdout.toString().trim())
    test.equal(options.rule, 'goodrule')
    test.end()
  })
})

tap.test('It sets key if supplied', function testKey (test) {
  exec('./index.js', ['http://www.google.com', '--key=opensesame', '--dryrun=true'], function testWithKey (error, stdout, stderr) {
    if (error) {
      throw error
    }
    var options = JSON.parse(stdout.toString().trim())
    test.equal(options.key, 'opensesame')
    test.end()
  })
})

tap.test('It sets url if supplied', function testUrl (test) {
  exec('./index.js', ['--url=http://www.google.com', '--dryrun=true'], function testWithUrl (error, stdout, stderr) {
    if (error) {
      throw error
    }
    var options = JSON.parse(stdout.toString().trim())
    test.equal(options.url, 'http://www.google.com')
    test.end()
  })
})

tap.test('It returns error on invalid url', function testError (test) {
  exec('./index.js', ['http://pysje'], function testWithError (error, stdout, stderr) {
    test.ok(error.toString().trim(), 'Error ok')
    test.end()
  })
})

tap.test('It returns data if url supplied', function testData (test) {
  exec('./index.js', ['https://www.google.com'], function testWithData (error, stdout, stderr) {
    if (error) {
      throw error
    }
    test.ok(stdout.toString().trim(), 'Data OK')
    test.end()
  })
})
