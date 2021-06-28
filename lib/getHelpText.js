'use strict'

function getHelptext () {
  const help = require('./helptext.json')
  return help.join('\n')
}

module.exports = getHelptext
